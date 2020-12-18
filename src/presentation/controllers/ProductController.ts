import { ProductModel } from '@/data/models'
import { ProductLoader } from '@/domain/api'
import { ProductViewModel } from '@/presentation/view-model'
import { Controller, HttpResponse, serverError, sucess } from '@/presentation/contracts'

export class ProductController implements Controller {
    constructor (private readonly productLoader: ProductLoader) {}

    async handle (): Promise<HttpResponse<ProductModel[]>> {
        try {
            const products = await this.productLoader.load()
            return sucess(ProductViewModel.mapCollection(products))
        } catch (error) {
            return serverError(error)
        }
    }
}