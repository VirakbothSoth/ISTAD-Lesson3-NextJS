import {NextResponse} from "next/server";

export default function AboutUs() {
    const isAuthenticated = true;

    if (!isAuthenticated) {
        NextResponse.redirect(new URL("/login"));
    }
}