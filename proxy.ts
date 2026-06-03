import {NextResponse,NextRequest} from "next/server";

export function proxy(request: NextRequest) {
    const isAuthenticated = false;

    if (isAuthenticated) {
        return NextResponse.redirect(new URL("/product", request.url));
    }

    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: "/dashboard/:path*",
};