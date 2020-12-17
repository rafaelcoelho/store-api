export class ProductUnavailableError extends Error {
    constructor () {
        super('Product Unavailable')
        this.name = 'ProductUnavailableError'
    }
}