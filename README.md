# Store
A TypeScript project used to simulate a web store that provides a couple of REST and GraphQL APIs.

- [Store](#store)
  - [Goal](#goal)
  - [Application Architecture](#application-architecture)
    - [The API endpoints](#the-api-endpoints)
      - [RESTful](#restful)
      - [GraphQL](#graphql)
    - [How to Use](#how-to-use)
    - [The Big Picture](#the-big-picture)
  - [License](#license)

## Goal
Exercise the TypeScript Open/Close principle around applications tiers in order to try out some refectories techniques as well as testability during expand journey.

## Application Architecture
Based on principle to programming for interfaces trying to abstract everything in order to avoid as much as possible coupling mainly towards third parties (like express, Restify and so on) the principle is to provide a clean design to embrace changes easily and be open to project concentrate in itself business logic.

### The API endpoints
There are two flavours of endpoints exposed by this project such as:

#### RESTful
The RESTFul endpoint is live upon `http://localhost:{env.port}/webShopping/v1/{resource}`

Where values extends for:
- env.port: can be defined by environment variable and the default is 5000
- resource: are built from `src/main/routes/*.ts` automatically, that's means all file beneath of this directory will be managed as route to build a endpoint upon that.

#### GraphQL
The graphql server is based on apollo-server-express and is available on `http://localhost:{env.port}/graphql`

The example below shows a query that can be placed to exercise the GraphQl server
```graphql
{
  product {
    description
    brand {
      country
    }
    price
    model
  }
}
```

### How to Use
From command line prompt:

```bash
$ npm run build
$ npm start
```

### The Big Picture
```text
         +------------------+
         |                  |
         |      Upstream    |
         |                  |
         +--------+---------+
                  |
                  |
                  |
+-----------------+--------------------+
|                                      |
|            Presentation              |
|                                      |
+-----------------+--------------------+
                  |
                  |
                  | - View-model
                  |
                  |
+-----------------+-------------------+
|                                     |
|               Domain                |
|                                     |
+-----------------+-------------------+
                  |
                  | - Domain-model
                  |
                  |
+-----------------+-------------------+
|                                     |
|                Data                 |
|                                     |
+-----------------+-------------------+
                  |
                  |
                  | - Data-model
                  |
                  |
              +---+--+
              |      |
              |      |
              |      |  - Data-Source
              |      |
              |      |
              +------+
```
## License
MIT