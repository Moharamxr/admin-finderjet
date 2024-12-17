import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // Mocked login status for testing; replace with actual cookie check
  const isLoggedIn = true; // Replace with: request.cookies.get("isLoggedIn")?.value === "true";

  // Public routes (authentication pages)
  // const publicRoutes = ["/auth/login", "/auth/forget-password"];

  // Protected routes (dashboard and admin features)
  // const protectedRoutes = ["/admin"];
 if (pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  // Redirect unauthenticated users from protected routes to login
  if (!isLoggedIn &&pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Redirect logged-in users from auth pages to the dashboard
  if (isLoggedIn && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: ["/","/auth/:path*", "/admin/:path*"], // Apply to authentication and admin routes only
};
