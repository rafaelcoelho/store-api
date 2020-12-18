import { LoadProductRepository } from '@/data/contract'
import { ProductModel } from '@/data/models'
import { Products } from '@/infra/data-sources'

export class FakeProductRepository implements LoadProductRepository {
    async loadProduct (): Promise<ProductModel[]> {
        
        return Products.map(item => ({
            brand: item.brand,
            model: item.model,
            description: item.description,
            price: item.price,
            createDate: new Date(item.createdDate),
            stock: item.stock
        }))
    }

}