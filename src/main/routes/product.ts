import { Router } from "express"
import { makeProductController } from "../factories/makeProductController"
import { adapterRoutes } from '@/main/adapters'

export default (router: Router): void => {
    router.get('/products', adapterRoutes(makeProductController()))
}