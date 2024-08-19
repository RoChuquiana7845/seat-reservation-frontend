interface Cart {
    id: string;
    createdAt: string;
    updateAt: string;
    isCheckedOut: boolean;
    IsActive: boolean;
    cartItems: ICartItem[];
}

interface ICartItem {
    id: string;
    quantity: number;
    cart: string;
    product: string;
}