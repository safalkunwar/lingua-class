import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken } from "@/lib/session";
import { findUser } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const session = await verifySessionToken(cookieStore.get("session")?.value);

  if (!session) {
    return NextResponse.json({ user: null });
  }

  const user = await findUser(session.username);

  return NextResponse.json({
    user: {
      username: session.username,
      name: user?.displayName ?? session.username,
      role: session.role,
    },
  });
}
