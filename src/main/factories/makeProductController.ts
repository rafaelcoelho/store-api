import { ProductLoaderService } from '@/data/services'
import { FakeProductRepository } from '@/infra/repositories'
import { ProductController } from '@/presentation/controllers'

export const makeProductController = (): ProductController => {
    const repo = new FakeProductRepository()
    const loader = new ProductLoaderService(repo)
    
    return new ProductController(loader)
}