import Link from "next/link";
import { ProductProps } from "@/types/index";

export default function ProductCard({product} : {product: ProductProps}) {
    return (
        <div className="border border-gray-300 rounded-lg p-5 text-center shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg">
            <div className="text-left">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500">${product.precio}</p>
                <Link href={`/products/${product.id}`} className="inline-block mt-2 py-2 px-3 text-xs text-white bg-primary rounded-md hover:bg-primary-light">Ver detalle</Link>
            </div>
        </div>
    );
}