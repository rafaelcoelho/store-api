import { ProductModel } from '@/data/models'
import { ProductLoader } from '@/data/services/api'
import { Controller, HttpResponse, serverError, sucess } from '@/presentation/contracts'

export class ProductController implements Controller {
    constructor (private readonly productLoader: ProductLoader) {}

    async handle (): Promise<HttpResponse<ProductModel>> {
        try {
            const products = this.productLoader.load()
            return sucess(products)
        } catch (error) {
            return serverError(error)
        }
    }
}