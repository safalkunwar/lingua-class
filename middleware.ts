import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ALLOWED_USERS, isAuthenticated } from "@/lib/auth";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  const { pathname } = request.nextUrl;

  const isAuth = isAuthenticated(session);

  const publicPaths = ["/login", "/", "/api/auth/logout"];
  const isPublic = publicPaths.some((path) => pathname === path || pathname.startsWith(path + "/"));

  if (!isAuth && !isPublic) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAuth && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
