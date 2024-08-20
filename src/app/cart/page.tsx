import {CartProvider} from "@/context/cartContext"
import CartListItems from "./cartItems"
import CartSummary from "./cartSummary"


export default function CartPage() {
    return (
        <CartProvider>
            <div className="flex flex-col md:flex-row gap-4 m-4">
                <div className="w-full md:w-3/4 border border-gray-300 rounded-lg p-4">
                    <CartListItems/>
                </div>
                <div className="w-full md:w-1/4 border border-gray-300 rounded-lg-md p-4">
                    <CartSummary/>
                </div>
            </div>
        </CartProvider>
    )
}