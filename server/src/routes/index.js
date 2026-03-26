import { Router } from "express";
import { UserController } from "../controllers/UserController.js"

const routes = Router();

routes.get('/usuarios', UserController.get)
routes.get('/', UserController.get)
routes.post('/usuario', UserController.post)
routes.put('/usuario/:id', UserController.put)
routes.delete('/usuarios/:id', UserController.delete)


export default routes