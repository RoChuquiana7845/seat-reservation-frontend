export type CartItemProps = {
    id: string;
    quantity: number;
}

export type CartProps = {
    id: string;
    createdAt: string;
    updateAt: string;
    isCheckedOut: boolean;
    IsActive: boolean;
    cartItems: CartItemProps[];
}