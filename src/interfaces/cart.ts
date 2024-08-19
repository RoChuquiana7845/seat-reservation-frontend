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

interface CartItem {
    id: string;
    createdAt: string;
    updateAt: string;
    quantity: number;
    product: {
        id: string;
        createdAt: string;
        updateAt: string;
        name: string;
        precio: string;
        description: string;
        stock: number;
    };
}