import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  // Get the current value of the 'isLoggedIn' cookie
  // const isLoggedIn = request.cookies.get("isLoggedIn")?.value === "true";
   const isLoggedIn = false;

  // Redirect from the home page to login if not logged in
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (isLoggedIn && request.nextUrl.pathname === "/auth/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Protect dashboard and other routes, redirect to login if not logged in
  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Handle unknown routes (any route not defined in the 'knownRoutes' list)
  const knownRoutes = ["/", "/auth/login", "/auth/register", "/dashboard"];
  if (!knownRoutes.some(route => request.nextUrl.pathname.startsWith(route)) && request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Allow the request to proceed if logged in or on a known route
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard/:path*"], // Apply to the home route and dashboard routes
};
