"use server";

import { cookies } from "next/headers";
import { validateCredentials } from "@/lib/auth";

export async function login(formData: FormData) {
  const username = formData.get("username")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  const user = validateCredentials(username, password);

  if (!user) {
    return { success: false, error: "Invalid credentials. Access denied." };
  }

  const cookieStore = await cookies();
  cookieStore.set("session", user.username, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { success: true };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
