import { adapterResolver } from '@/main/adapters'
import { makeProductController } from '@/main/factories'

export default {
  Query: {
    product: async () => adapterResolver(makeProductController())
  }
}
