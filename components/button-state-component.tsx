"use client"
import {useState} from "react";

export default function ButtonStateComponent() {
    // normal variable
    // let count = 0;
    // function handleClick() {
    //     count++;
    //     console.log("count wit normal var: ", count);
    // }

    // state
    const [stateCount, setStateCount] = useState<number>(0);

    const stateHandleClick = (n: number) => {
        setStateCount(stateCount + n);
    }

    return (
    <button
        className="px-4 py-2 m-3 ml-0 rounded-lg
        bg-blue-500 duration-300
        hover:bg-blue-300 hover:cursor-pointer
        hover:scale-105
        "
        onClick={ () => stateHandleClick(1) }
    >
        Count: {stateCount}
    </button>
    )
}