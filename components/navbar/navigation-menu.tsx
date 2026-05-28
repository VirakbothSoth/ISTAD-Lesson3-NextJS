"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationMenuType = {
    path: string,
    name: string
}

// menu obj
const menuObject: NavigationMenuType[] = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/about",
        name: "About"
    },
    {
        path: "/about/team",
        name: "Team"
    },
    {
        path: "/product",
        name: "Product"
    },
]

export default function NavigationMenu() {
    let pathName = usePathname();
    return (
        <nav className="flex px-5">
                {menuObject.map((menu) => {
                    const isActive =
                        menu.path === "/"
                            ? pathName = menu.path
                            : pathName = menu.path || pathName.startsWith(`${menu.path}`);
                    return (
                        <Link
                            key={menu.path}
                            className={isActive ? "bg-blue-500 font-bold" : ""}
                            href={menu.path}
                        >
                            {menu.name}
                        </Link>
                    )})};
        </nav>
    )
}