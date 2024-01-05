import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

interface Payload {
  email: string;
  role: string;
}

const SECRET_KEY = process.env.SECRET_KEY || "";

export default async function middleware(request: NextRequest) {
  const { cookies } = request;
  const token = cookies.get("token");

  return await checkToken(token?.value, request);
}

export async function verify(token: string): Promise<Payload> {
  const { payload } = await jwtVerify<Payload>(
    token,
    new TextEncoder().encode(SECRET_KEY)
  );
  return payload;
}

async function checkToken(token: string | undefined, request: NextRequest) {
  if (!token) {
    let response: NextResponse<unknown>;
    if (request.nextUrl.pathname.startsWith("/books/list")) {
      response = NextResponse.redirect(new URL("/auth/login", request.url));
    } else {
      response = NextResponse.next();
    }
    response.cookies.delete("email");
    response.cookies.delete("role");
    return response;
  }

  try {
    const payload = await verify(token);
    console.log("PAYLOAD", payload);

    if (payload.email) {
      const response = NextResponse.next();

      response.cookies.set("email", payload.email);
      response.cookies.set("role", payload.role);
      return response;
    }
    return NextResponse.redirect(new URL("/auth/login", request.url));
  } catch (err) {
    console.error("Verification failed", err);
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

// export const config = {
//   matcher: "/books/list/:path*",
// };
