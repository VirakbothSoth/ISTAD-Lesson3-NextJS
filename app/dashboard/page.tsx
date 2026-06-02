/* eslint-disable @next/next/no-img-element */
import { useState, Suspense } from "react";
import { productType } from "@/lib/productType";

export default function Dashboard() {
    const [product, setProduct] = useState<productType>();

    setTimeout(() => {
        async function getData() {
            const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
            const singleProduct = await fetch(`${BASE_URL}/api/v1/products/slug/30`);
            const product = await singleProduct.json();

            setProduct(product);
        }
        getData();
    }, 5000)

    return (
        <div className="grid grid-cols-2">
            {/* product */}
            <Suspense fallback={<p className="text-3xl text-red-500">Loading...</p>}>
                <div className="m-5 cursor-pointer rounded-lg bg-amber-100 p-5 transition hover:scale-[1.02] hover:bg-amber-200 w-100">
                    <img src={product?.images[0]} alt={product?.title} />
                    <h2 className="text-md">{product?.id}</h2>
                    <h2 className="text-lg font-bold line-clamp-1">{product?.title}</h2>
                    <p className="text-md line-clamp-3">{product?.description}</p>
                </div>
            </Suspense>
        </div>
    )
}