/* eslint-disable @next/next/no-img-element */
import {notFound} from "next/navigation";

export default async function DetailProduct({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const BASE_URL = process.env.NEXT_PUBLIC_API_URL
    const singleProduct = await fetch(`${BASE_URL}/api/v1/products/slug/${slug}`);

    if (!singleProduct.ok) {
        notFound();
    }
    const product = await singleProduct.json();

    return (
        <div className="bg-neutral-700 m-5 p-5 cursor-pointer rounded-lg transition hover:scale-105">
            <img
                src={product.images[0]}
                alt={product.title}
                width="200"
            />
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-lg line-clamp-3">{product.description}</p>
        </div>
    )
}