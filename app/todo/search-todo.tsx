"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TodoType } from "@/lib/todo"
import { use } from "react"
import { useState } from "react"

export default function SearchTodo({
    todosPromise,
}: {
    todosPromise: Promise<TodoType[]>
}) {
    const todos = use(todosPromise);
    // handle search
    const [search, setSearch] = useState<any>("");

    const searchData = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <section>
            <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="border"
            />
            <div className="cards">
                {searchData.map((todo) => (
                    <div className="card" key={todo.title}>
                        <p>{todo.title}</p>
                        <p>{todo.completed}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}