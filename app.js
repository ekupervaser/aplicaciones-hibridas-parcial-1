import express from 'express'
import ProjectsRoute from './routes/projects.routes.js'
import ProjectsRouteApi from './api/routes/projects.api.routes.js'

const app = express()

app.use(express.urlencoded({ extended: true}))
app.use('/api', express.json())
app.use('/', express.static('public'))

app.use(ProjectsRoute)
app.use('/api', ProjectsRouteApi)

app.listen(2022, function() {
    console.log('Servidor levantado');
})