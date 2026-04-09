import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/api/auth")
  ) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("_overlens_auth");
  if (!authCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const sitePassword = process.env.SITE_PASSWORD || "Atlas26!";
  const expectedToken = await hashPassword(sitePassword);

  if (authCookie.value !== expectedToken) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("_overlens_auth");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.svg).*)"],
};
