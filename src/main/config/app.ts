import { setupRoutes } from '@/main/config/routes'
import { setupGraphQlServer } from '@/main/config/graphql-config'

import express from 'express'

const app = express()

setupRoutes(app)
setupGraphQlServer(app)

export default app