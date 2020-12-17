export type Products = {
    brand: Brand
    model: string
    description: string
    price: number
    createDate: Date
    stock: Stock
}

type Brand = {
    name: string,
    country: string
}

type Stock = {
    level: number,
    reservedItens: number
}