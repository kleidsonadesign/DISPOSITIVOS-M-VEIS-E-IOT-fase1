import productRouter from './src/routers/product/productRouter.js'
import userRouter from './src/routers/user/userRouter.js'
import express from 'express'
import mongoose from 'mongoose'
import mid from './src/middleWare.js'
import cors from 'cors'


import dotenv from 'dotenv'
dotenv.config()

mongoose.connect("mongodb://127.0.0.1:27017/supermaket")

const app = express()
app.use(express.json())
app.use(cors())

app.use(mid)
app.use("/api/product", productRouter)
app.use("/api/user", userRouter)


app.listen(process.env.PORT, () => {
    console.log("O servidor está rodando na porta", process.env.PORT)
})