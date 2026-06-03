"use client";

import { useTransition } from "react";

export default function Button() {
    const [pending, startTransition] = useTransition();

    const handleClick = () =>
        startTransition(() => {
            throw new Error("Exception");
        })

    return (
        <button className="bg-blue-300" onClick={handleClick}>
            Click me
        </button>
    )
}