import {productType} from "@/lib/productType";

export default function ProductCardComponent({
    id,
    title,
    description
}: productType) {
    return (
        <div className="bg-blue-100 m-5 p-5">
            <h2 className="text-lg">{id}</h2>
            <h2 className="text-2xl">{title}</h2>
            <p className="text-lg line-clamp-3">{description}</p>
        </div>
    )
}