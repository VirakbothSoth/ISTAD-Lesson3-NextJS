"use client"
import { useRouter } from "next/navigation"

export default function Login() {
    const router = useRouter()

    function handleOnClick() {
        const isLog = true;
        if (isLog) {
            router.push("/about");
        }
    }


    return (
        <button
        className="p-8 bg-red-400 w-125"
        type="button"
        onClick={handleOnClick}>
            Login
        </button>
    )
}