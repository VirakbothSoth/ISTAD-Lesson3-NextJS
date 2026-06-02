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
    path: "/about",
    name: "About",
  },
  {
    path: "/about/team",
    name: "Team",
  },
  {
    path: "/product",
    name: "Product",
  },
  {
    path: "/form",
    name: "Form",
  },
];
export default function NavigationMenu() {
  const pathName = usePathname();
  return (
    <nav className="p-2 bg-gray-950 border-b border-gray-700">
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
                ? "text-blue-600 font-bold px-5 text-3xl"
                : "text-neutral-300 hover:text-blue-400 hover:underline px-5 text-3xl transition duration-300"
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