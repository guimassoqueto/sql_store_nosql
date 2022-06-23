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