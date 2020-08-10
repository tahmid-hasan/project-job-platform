import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()

app.use(cors({
  "origin": "*"
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

export default app