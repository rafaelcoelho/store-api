import { Router } from "express"
import { makeProductController } from "../factories/makeProductController"
import { adaptorRoutes } from '@/main/adapters'

export default (router: Router): void => {
    router.get('/products', adaptorRoutes(makeProductController()))
}