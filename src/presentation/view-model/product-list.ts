import { Products } from "@/domain/entities"

export class ProductViewModel {
    brand: Brand
    model: string
    description: string
    price: number
    createDate: string
    stock: Stock

    static map (entity: Products): ProductViewModel {
        return {
            ...entity,
            createDate: entity.createDate.toISOString()
        }
    }

    static mapCollection (entities: Products[]): ProductViewModel[] {
        return entities.map(ProductViewModel.map)
    }
}

type Brand = {
    name: string,
    country: string
}

type Stock = {
    level: number,
    reservedItens: number
}