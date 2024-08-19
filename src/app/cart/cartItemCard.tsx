import {ProductProps} from "@/types";

export default function CartItemCard({ item }: { item: ProductProps }) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.precio}</p>
            </div>
        </div>
    )
}