import prisma from "../config/prisma.js"

export const UserController = {

  async get(req, res) {
    try {
      const user = await prisma.user.findMany()
      res.json(user).status(200) // Status 200: OK

    } catch (error) {
      console.error("Erro no GET:", error)
      res.status(500).json({ message: "Erro ao buscar usuários." });
    }
  },

  async post(req, res) {
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
  },

  async put(req, res) {
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

  },
  async delete(req, res) {
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

  }

}
