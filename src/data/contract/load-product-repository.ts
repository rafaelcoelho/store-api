import { ProductModel } from '@/data/models'

export interface LoadProductRepository {
    loadProduct: () => Promise<ProductModel[]>
}