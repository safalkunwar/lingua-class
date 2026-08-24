import { randomUUID, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type UserRole = "admin" | "teacher" | "student";

export type StoredUser = {
  id: string;
  username: string;
  displayName: string;
  passwordHash: string;
  role: UserRole;
  createdAt: string;
  lastLoginAt: string | null;
};

export type PublicUser = Omit<StoredUser, "passwordHash">;

const DATA_DIR = path.join(process.cwd(), ".data");
const USERS_FILE = path.join(DATA_DIR, "users.json");

const SEED_USERS: Array<Pick<StoredUser, "username" | "displayName" | "role"> & { password: string }> = [
  { username: "admin", displayName: "Admin", role: "admin", password: "admin123" },
  { username: "teacher", displayName: "Teacher", role: "teacher", password: "teacher123" },
];

export const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,20}$/;

function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

function toPublicUser(user: StoredUser): PublicUser {
  const { passwordHash: _passwordHash, ...rest } = user;
  return rest;
}

async function readStore(): Promise<StoredUser[]> {
  try {
    const raw = await fs.readFile(USERS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.users)) return parsed.users as StoredUser[];
  } catch {
    // missing or corrupted store falls through to seeding
  }
  return [];
}

async function writeStore(users: StoredUser[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(USERS_FILE, JSON.stringify({ users }, null, 2), "utf-8");
}

async function ensureSeeded(): Promise<StoredUser[]> {
  let users = await readStore();
  if (users.length > 0) return users;

  const now = new Date().toISOString();
  users = SEED_USERS.map((seed) => ({
    id: randomUUID(),
    username: seed.username,
    displayName: seed.displayName,
    passwordHash: hashPassword(seed.password),
    role: seed.role,
    createdAt: now,
    lastLoginAt: null,
  }));
  await writeStore(users);
  return users;
}

export async function getAllUsers(): Promise<PublicUser[]> {
  const users = await ensureSeeded();
  return users.map(toPublicUser);
}

export async function findUser(username: string): Promise<StoredUser | null> {
  const users = await ensureSeeded();
  return users.find((u) => u.username.toLowerCase() === username.toLowerCase()) ?? null;
}

export async function validateCredentials(username: string, password: string): Promise<StoredUser | null> {
  const user = await findUser(username);
  if (!user) return null;
  if (!verifyPassword(password, user.passwordHash)) return null;
  return user;
}

export type RegisterInput = {
  username: string;
  password: string;
  displayName?: string;
};

export async function registerUser(input: RegisterInput): Promise<
  { success: true; user: StoredUser } | { success: false; error: string }
> {
  const username = input.username.trim();

  if (!USERNAME_PATTERN.test(username)) {
    return { success: false, error: "Username must be 3-20 characters (letters, numbers, underscores)." };
  }

  if (input.password.length < 6) {
    return { success: false, error: "Password must be at least 6 characters." };
  }

  const users = await ensureSeeded();
  const exists = users.some((u) => u.username.toLowerCase() === username.toLowerCase());
  if (exists) {
    return { success: false, error: "That username is already taken." };
  }

  const user: StoredUser = {
    id: randomUUID(),
    username,
    displayName: (input.displayName?.trim() || username).slice(0, 40),
    passwordHash: hashPassword(input.password),
    role: "student",
    createdAt: new Date().toISOString(),
    lastLoginAt: null,
  };

  await writeStore([...users, user]);
  return { success: true, user };
}

export async function updateLastLogin(userId: string) {
  const users = await ensureSeeded();
  const next = users.map((u) => (u.id === userId ? { ...u, lastLoginAt: new Date().toISOString() } : u));
  await writeStore(next);
}

export async function updateUserRole(requesterUsername: string, userId: string, role: UserRole): Promise<
  { success: true } | { success: false; error: string }
> {
  const users = await ensureSeeded();
  const target = users.find((u) => u.id === userId);
  if (!target) return { success: false, error: "User not found." };
  if (target.username === requesterUsername) {
    return { success: false, error: "You cannot change your own role." };
  }
  const next = users.map((u) => (u.id === userId ? { ...u, role } : u));
  await writeStore(next);
  return { success: true };
}

export async function deleteUser(requesterUsername: string, userId: string): Promise<
  { success: true } | { success: false; error: string }
> {
  const users = await ensureSeeded();
  const target = users.find((u) => u.id === userId);
  if (!target) return { success: false, error: "User not found." };
  if (target.username === requesterUsername) {
    return { success: false, error: "You cannot delete your own account." };
  }
  await writeStore(users.filter((u) => u.id !== userId));
  return { success: true };
}
