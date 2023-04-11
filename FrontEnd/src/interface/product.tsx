export default interface iProduct {
    _id?:number|string,
    name:string,
    price: number,
    desc: string,
    image: string,
    categoryId: string,
    createdAt: Date,
    updatedAt: Date,
    [Symbol.iterator](): IterableIterator<string | number>;
}