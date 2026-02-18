import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()
app.use(express.json())
app.use(cors())

// Rota para buscar todos os usuários cadastrados e retornar um array
app.get('/usuarios', async (req, res) => {

    try {
        const user = await prisma.user.findMany()
        res.json(user).status(200) // Status 200: OK

    } catch (error) {
        console.error("Erro no GET:", error)
        res.status(500).json({ message: "Erro ao buscar usuários." });
    }




})

// Rota raiz que redireciona automaticamente para a listagem de usuários
app.get('/', (req, res) => {
    res.redirect('/usuarios');
});

// Rota para cadastrar um novo usuário no MongoDB via Prisma
app.post('/usuarios', async (req, res) => {

    try {

        await prisma.user.create({
            data: {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            }
        })
        res.status(201).json({ message: "Usuário criado com sucesso!" })
    } catch (error) {
        console.error("Erro ao cadastrar um usuário:", error);
        res.status(500).json({ message: "Erro ao cadastrar usuário." });
    }


})


// Rota para alterar um usuário específico através do ID recebido na URL
app.put('/usuarios/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: req.params.id
            },

            data: {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email
            }
        })
        res.status(200).json(user)

    } catch (error) {
        console.error("Erro no PUT:", error)
        res.status(404).json({ message: "Usuário não encontrado para atualização." });
    }
})


// Rota para deletar um usuário específico através do ID recebido na URL
app.delete('/usuarios/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({ message: "Usuário deletado com sucesso!" })

    } catch (error) {
        console.error("Erro no DELETE:", error)
        res.status(404).json({ message: "Erro ao deletar: usuário não encontrado." });
    }
})


app.listen(3000)