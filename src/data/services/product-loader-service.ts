import { Products } from "@/domain/entities"
import { ProductUnavailableError } from "@/domain/errors"
import { LoadProductRepository } from "@/data/contract/load-product-repository"
import { ProductLoader } from "@/domain/api"

export class ProductLoaderService implements ProductLoader {
    constructor(private readonly loadProductRepository: LoadProductRepository) {}

    async load (): Promise<Products[]> {
        if (new Date().getHours() > 22) {
            throw new ProductUnavailableError()
        }

        return this.loadProductRepository.loadProduct()
    }
}