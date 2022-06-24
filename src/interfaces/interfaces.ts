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
    id: string;
    name: String;
    Product: IProduct[];
    email: string;
}

export interface ICart {
    id: string;
    product: IProduct;
    productId: string;
    user: IUser;
    userId: string;
}