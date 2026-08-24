import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken } from "@/lib/session";
import { getAllUsers, updateUserRole, deleteUser, UserRole } from "@/lib/auth";

async function requireAdmin() {
  const cookieStore = await cookies();
  return verifySessionToken(cookieStore.get("session")?.value);
}

export async function GET() {
  const session = await requireAdmin();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const users = await getAllUsers();
  return NextResponse.json({ users });
}

export async function PATCH(request: NextRequest) {
  const session = await requireAdmin();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const body = await request.json().catch(() => null);
  const userId = body?.id as string | undefined;
  const role = body?.role as UserRole | undefined;

  if (!userId || !role || !["admin", "teacher", "student"].includes(role)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const result = await updateUserRole(session.username, userId, role);
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(request: NextRequest) {
  const session = await requireAdmin();
  if (!session || session.role !== "admin") {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const userId = new URL(request.url).searchParams.get("id");
  if (!userId) {
    return NextResponse.json({ error: "Missing user id." }, { status: 400 });
  }

  const result = await deleteUser(session.username, userId);
  if (!result.success) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
