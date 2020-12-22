import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        product: [Product!]
    }

    type Product {
        brand: Brand!
        model: String!
        description: String!
        price: Int!
        createDate: String!
        stock: Stock!
    }

    type Brand {
        name: String!
        country: String!
    }

    type Stock {
        level: Int!
        reservedItems: Int!
    }
`