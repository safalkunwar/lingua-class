export const ALLOWED_USERS = [
  {
    username: "admin",
    password: "admin123",
    role: "admin",
    name: "Admin",
  },
  {
    username: "teacher",
    password: "teacher123",
    role: "teacher",
    name: "Teacher",
  },
];

export function validateCredentials(username: string, password: string) {
  const user = ALLOWED_USERS.find(
    (u) => u.username === username && u.password === password
  );
  return user || null;
}

export function isAuthenticated(session: string | undefined) {
  if (!session) return false;
  const user = ALLOWED_USERS.find((u) => u.username === session);
  return !!user;
}
