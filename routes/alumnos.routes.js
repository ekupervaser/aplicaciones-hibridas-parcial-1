import express from 'express'
import * as controller from '../controllers/alumnos.controllers.js'

const router = express.Router()
    
router.get('/alumnos', controller.getAlumnos)
router.get('/alumnos/nuevo', controller.createAlumnoFormPage)
router.post('/alumnos/nuevo', controller.createAlumno)
router.get('/alumnos/:legajo/edit', controller.editAlumnoForm)
router.post('/alumnos/:legajo/edit', controller.editAlumno)
router.get('/alumnos/:legajo/delete', controller.deleteAlumnoForm)
router.post('/alumnos/:legajo/delete', controller.deleteAlumno)
router.get('/alumnos/:legajo', controller.getAlumnoByLegajo)

export default router