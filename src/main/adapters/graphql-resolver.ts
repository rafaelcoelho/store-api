import { Controller } from '@/presentation/contracts'

export const adapterResolver = async (controller: Controller): Promise<any> => {
    const httpResponse = await controller.handle()
    return httpResponse.payload
}