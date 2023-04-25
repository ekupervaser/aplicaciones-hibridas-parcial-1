import express from 'express'
import AlumnosRoute from './routes/alumnos.routes.js'
/*  import path from 'path'; */

const app = express()

app.use(express.urlencoded({ extended: true}))
app.use('/', express.static('public'))

app.use(AlumnosRoute)

app.listen(2023, function() {
    console.log('Servidor levantado');
})