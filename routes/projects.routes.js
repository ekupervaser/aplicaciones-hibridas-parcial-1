import express from 'express'
import * as controller from '../controllers/projects.controllers.js'

const router = express.Router()

router.get('/projects/:section', controller.getProjectBySection)

export default router