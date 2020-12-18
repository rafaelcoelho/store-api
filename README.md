# Store
A TypeScript project used to simulate a web store that provides a couple of REST and GraphQL APIs.

## Goal
Exercise the TypeScript Open/Close principle around applications tiers in order to try out some refectories techniques as well as testability during expand journey.

## Application Architecture
Based on principle to programming for interfaces trying to abstract everything in order to avoid as much as possible coupling mainly towards third parties (like express, Restify and so on) the principle is to provide a clean design to embrace changes easily and be open to project concentrate in itself business logic.

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