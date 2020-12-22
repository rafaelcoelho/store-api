import { Controller } from '@/presentation/contracts'

import { Request, Response } from 'express'

export const adapterRoutes = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpResponse = await controller.handle()
        res.status(httpResponse.code).json(httpResponse.payload)
    }
}