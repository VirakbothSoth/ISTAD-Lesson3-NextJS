import { TodoType } from "@/lib/todo";
import { Suspense } from "react";
import SearchTodo from "./search-todo";

// func get todo
async function getTodo(): Promise<TodoType[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    return res.json();
}

export default function Todo() {
    const todosPromise = getTodo();
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <SearchTodo todosPromise={todosPromise} />
            </Suspense>
        </div>
    )
}