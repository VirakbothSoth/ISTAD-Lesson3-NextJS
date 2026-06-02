"use client"
import { useEffect } from "react";

export default function ErrorPage({error}: {error: Error}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <h2 className="grid place-content-center h-screen text-2xl">
            Something went wrong!!
        </h2>
    )
}