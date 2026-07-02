import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.nextUrl.hostname;
  if (host.endsWith(".vercel.app")) {
    const url = request.nextUrl.clone();
    url.hostname = "www.beckfordsociety.org";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}
