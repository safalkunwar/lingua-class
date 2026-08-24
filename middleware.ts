import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/session";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;
  const session = await verifySessionToken(token);
  const { pathname } = request.nextUrl;

  const isAdminApi = pathname.startsWith("/api/admin");
  if (isAdminApi && (!session || session.role !== "admin")) {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const publicPaths = ["/login", "/", "/api/auth/logout"];
  const isPublic = publicPaths.some((path) => pathname === path || pathname.startsWith(path + "/"));

  if (!session && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if ((pathname === "/admin" || pathname.startsWith("/admin/")) && session?.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
