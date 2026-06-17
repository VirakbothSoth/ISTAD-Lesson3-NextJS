"use client"
import { useState, useEffect } from "react"
import { productType } from "@/lib/productType"
import { redirect } from "next/navigation";
import ProductCardComponent from "@/components/product/product-card";

type productData = productType[];
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductPage() {
    const [products, setProducts] = useState<productData>();
    useEffect(() => {
        async function getData() {
            const res = await fetch(`${BASE_URL}/api/v1/products`);
            if (!res.ok) {
                redirect("/");
            }
            const data = await res.json();
            setProducts(data);
        }
        getData();
    }, []);

    console.log("data: ", products);

    return (
        <div className="cards">
            {products?.map((product) => (
                <ProductCardComponent
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    images={product.images}
                    slug={product.slug}
                />
            ))}
        </div>
    )
}