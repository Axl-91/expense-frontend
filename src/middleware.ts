import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const jwt = req.cookies.get("jwt")?.value;

  const isDashboard = url.pathname.startsWith("/dashboard");
  const isAuthPage = url.pathname === "/" || url.pathname === "/login";

  if (isDashboard && !jwt) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (isAuthPage && jwt) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/",
    "/login",
  ],
};

