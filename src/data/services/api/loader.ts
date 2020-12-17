import { Products } from '@/domain/entities'

export interface ProductLoader {
    load: () => Promise<Products[]>
}