import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session")?.value;

  if (!sessionCookie || !isAuthenticated(sessionCookie)) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({ user: { username: sessionCookie } });
}
