import Link from "next/link";
import { productType } from "@/lib/productType";

export default function ProductCardComponent({
    id,
    title,
    description,
    slug,
}: productType) {
    return (
        <Link href={`/product/${slug}`}>
            <div className="bg-gray-950 border border-gray-700 p-5 cursor-pointer rounded-lg transition hover:scale-105 h-full">
                <h2 className="text-md">{id}</h2>
                <h2 className="text-lg font-bold line-clamp-1">{title}</h2>
                <p className="text-md line-clamp-3">{description}</p>
            </div>
        </Link>
    );
}
