export interface IProduct {
    id?: string;
    title: string;
    image: string;
    price: number;
    description?: string;
    available: number;
    createdBy?: IUser;
}

export interface IUser {
    id?: string;
    name: string;
    Product?: IProduct[];
    email: string;
    password: string;
}

export interface ICart {
    id: string;
    product: IProduct;
    productId: string;
    user: IUser;
    userId: string;
}

export interface IOrder {
    id: string;
    cart: ICart;
    user: IUser;
    cartId: string;
    userId: string;
}

export interface ILogin {
    email: string;
    password: string;
}