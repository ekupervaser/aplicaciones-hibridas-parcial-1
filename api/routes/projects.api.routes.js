import { Router } from 'express'
import * as projectController from '../controllers/projects.api.controllers.js'
import * as clienteController from '../controllers/clientes.api.controllers.js'

const router = Router()

router.get('/projects/:id', projectController.getProjectById)

router.get('/projects', projectController.getProjects)

router.post('/projects', projectController.createProject)

router.delete('/projects/:id', projectController.deleteProject) 

router.patch('/projects/:id', projectController.editProjectById)

router.put('/projects/:id', projectController.replaceProjectById)

router.get('/clientes', clienteController.getClientes)

router.get('/clientes/:clienteId/projects', projectController.getProjectsByClient)

router.post('/clientes', clienteController.createCliente)

export default router