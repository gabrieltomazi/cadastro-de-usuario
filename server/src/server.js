
import dotenv from 'dotenv'
import app from "./app.js"
import { prismaConnect } from './config/prisma.js'
dotenv.config()

const PORT = process.env.PORT

const startServer = async () => {
    try {
        await prismaConnect()
        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Erro ao iniciar o servidor", error)
    }

}

startServer()