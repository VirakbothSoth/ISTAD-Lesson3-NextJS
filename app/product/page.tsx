import { useState } from "react"
import { useEffect } from "react"

type productType = {
    id: number;
    title: string;
    description: string;
};

type productData = productType[];

export default function ProductPage() {
    const [products, setProducts] = useState<productType>();
    useEffect(() => {
        async function getData() {
            const res = await fetch("api/v1/products");
            const data = await res.json();
            setProducts(data);
        }
        getData();
    }, []);

    console.log("data: ", products);

    return (
        <div>
            {products?.map((product) => (
                    <div>
                        <h2>{product.id}</h2>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </div>
            ))}
        </div>
    )
}