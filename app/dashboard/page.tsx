import { Suspense } from "react";
import ProductPage from "../product/page";

export default async function Dashboard() {
    return (
        <>
            {/* product */}
            <h1 className="text-3xl text-center m-5">Product List</h1>
            <Suspense
            fallback={
                <p className="text-3xl grid place-content-center h-screen max-h-screen text-red-600">Loading...</p>
            }>
                <ProductPage />
            </Suspense>
        </>
    )
}