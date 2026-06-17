import Link from "next/link";
import { productType } from "@/lib/productType";
import FadeInUp from "../FadeInUp";
import Image from "next/image";

export default function ProductCardComponent({
    id,
    title,
    description,
    images,
    slug,
}: productType) {
    return (
        <Link href={`/product/${slug}`}>
            <FadeInUp>
                <div className="card">
                    <Image width={300} height={200} alt="Test" src={images[0]} />
                    <h2 className="text-md">{id}</h2>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </FadeInUp>
        </Link>
    );
}
