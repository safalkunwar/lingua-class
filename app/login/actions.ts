"use server";

import { cookies, headers } from "next/headers";
import { validateCredentials, registerUser, updateLastLogin } from "@/lib/auth";
import { createSessionToken } from "@/lib/session";

async function setSessionCookie(username: string, role: "admin" | "teacher" | "student") {
  const token = await createSessionToken(username, role);
  const headerList = await headers();
  const proto = (headerList.get("x-forwarded-proto") ?? "").split(",")[0].trim();
  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: proto === "https",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

function failure(error: string) {
  return { success: false as const, error };
}

export async function login(formData: FormData) {
  try {
    const username = formData.get("username")?.toString().trim() || "";
    const password = formData.get("password")?.toString() || "";

    if (!username || !password) {
      return failure("Please enter your username and password.");
    }

    const user = await validateCredentials(username, password);

    if (!user) {
      return failure("Invalid username or password.");
    }

    await setSessionCookie(user.username, user.role);
    await updateLastLogin(user.id);

    return { success: true as const, username: user.username };
  } catch {
    return failure("Sign in failed due to a server error. Please try again.");
  }
}

export async function register(formData: FormData) {
  try {
    const username = formData.get("username")?.toString().trim() || "";
    const displayName = formData.get("displayName")?.toString() || "";
    const password = formData.get("password")?.toString() || "";
    const confirmPassword = formData.get("confirmPassword")?.toString() || "";

    if (password !== confirmPassword) {
      return failure("Passwords do not match.");
    }

    const result = await registerUser({ username, password, displayName });

    if (!result.success) {
      return failure(result.error);
    }

    await setSessionCookie(result.user.username, result.user.role);
    await updateLastLogin(result.user.id);

    return { success: true as const, username: result.user.username };
  } catch {
    return failure("Account creation failed due to a server error. Please try again.");
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
