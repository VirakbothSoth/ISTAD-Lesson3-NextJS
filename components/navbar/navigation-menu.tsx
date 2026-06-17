"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavigationMenuType = {
  path: string;
  name: string;
};

// menu object
const menuObject: NavigationMenuType[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/product",
    name: "Product",
  },
    {
    path: "/user",
    name: "User",
  },
];
export default function NavigationMenu() {
  const pathName = usePathname();
  return (
    <nav className="p-1 bg-gray-950 border-b border-gray-700">
      {menuObject.map((menu) => {
        const isActive =
          menu.path === "/"
            ? pathName === menu.path
            : pathName === menu.path || pathName.startsWith(`${menu.path}`);
        return (
          <Link
            key={menu.path}
            className={
              isActive
                ? "text-blue-600 font-bold px-3 text-lg"
                : "text-neutral-300 hover:text-blue-400 hover:underline px-3 text-lg transition duration-300"
            }
            href={menu.path}
          >
            {menu.name}
          </Link>
        );
      })}
    </nav>
  );
}