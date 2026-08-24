"use server";

import { cookies } from "next/headers";
import { validateCredentials, registerUser, updateLastLogin } from "@/lib/auth";
import { createSessionToken } from "@/lib/session";

async function setSessionCookie(username: string, role: "admin" | "teacher" | "student") {
  const token = await createSessionToken(username, role);
  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function login(formData: FormData) {
  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!username || !password) {
    return { success: false as const, error: "Please enter your username and password." };
  }

  const user = await validateCredentials(username, password);

  if (!user) {
    return { success: false as const, error: "Invalid username or password." };
  }

  await setSessionCookie(user.username, user.role);
  await updateLastLogin(user.id);

  return { success: true as const, username: user.username };
}

export async function register(formData: FormData) {
  const username = formData.get("username")?.toString().trim() || "";
  const displayName = formData.get("displayName")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const confirmPassword = formData.get("confirmPassword")?.toString() || "";

  if (password !== confirmPassword) {
    return { success: false as const, error: "Passwords do not match." };
  }

  const result = await registerUser({ username, password, displayName });

  if (!result.success) {
    return { success: false as const, error: result.error };
  }

  await setSessionCookie(result.user.username, result.user.role);
  await updateLastLogin(result.user.id);

  return { success: true as const, username: result.user.username };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
