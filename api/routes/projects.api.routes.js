import { Router } from 'express'
import * as projectController from '../controllers/projects.api.controllers.js'
import * as clientController from '../controllers/clients.api.controllers.js'

const router = Router()

router.get('/projects/:id', projectController.getProjectById)

router.get('/projects', projectController.getProjects)

router.post('/projects', projectController.createProject)

router.delete('/projects/:id', projectController.deleteProject) 

router.patch('/projects/:id', projectController.editProjectById)

router.put('/projects/:id', projectController.replaceProjectById)

router.get('/clients', clientController.getClients)

export default router