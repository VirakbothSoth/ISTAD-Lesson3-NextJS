"use client";
import FadeInUp from "@/components/FadeInUp";
import { UserType } from "@/lib/user";
import useSWR from "swr";

// create delay function
async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const fetcher = async (url: string): Promise<UserType[]> => {
    await delay(500);
    const res = await fetch(url);
    if (!res.ok) {
        console.log("Status code: ", res.status);
    }
    console.log("Status code: ", res.status);
    return res.json();
};

export default function User() {
    const { data, error, isLoading, mutate, isValidating } = useSWR("https://jsonplaceholder.typicode.com/users",fetcher)

    if (error) {
        return new Error("There was an issue loading this");
    }

    if (isLoading) {
        return (
            <div className="grid place-content-center h-screen text-3xl text-blue-400">
                loading... (wait 500 milliseconds)
            </div>
        )
    }

    return (
        <div className="p-4 h-screen">
            <button
                className="bg-blue-600 hover:bg-blue-300 cursor-pointer px-2 py-1.5 rounded-lg text-2xl font-bold m-4 ml-0"
                onClick={() => mutate()}
            >
                {isValidating ? "refreshing.." : "refresh"}
            </button>

            <div className="cards">
                {data?.map((user) => (
                    <FadeInUp key={user.id}>
                        <div className="card">
                            <h2>{user.name}</h2>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </div>
                    </FadeInUp>
                ))}
            </div>
        </div>
    )
}