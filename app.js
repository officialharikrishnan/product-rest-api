import express from 'express'
import { routes } from './routes/index.js'
import dependencies from './config/dependencies.js'
import cors from 'cors'
const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())

app.use('/api',routes(dependencies))

export {app}