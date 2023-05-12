import * as service from "../services/projects.services.js"
import * as view from "../views/projects.views.js"

function getProjects (req, res) {
    service.getProjects({deleted: true})
         .then(function(projects) {
             res.send(view.createListPage(projects))
         })
 
 }


 function getProjectBySection (req, res) {
 const section = req.params.section

    service.getProjectBySection(section)
        .then(function(project) {
            if (project) {
                res.send(view.createProjectPage(project, section))
            }
            else {
                res.send(view.createPage('Error 404', '<p>Proyecto no encontrado</p>'))
            }
            
        })
}


 /* function getProjectByLegajo (req, res) {
    let legajo = req.params.legajo

    service.getProjectByLegajo(legajo)
        .then(function(project) {
            if (project) {
                res.send(view.createProjectPage(project))
            }
            else {
                res.send(view.createPage('Error 404', '<p>Proyecto no encontrado</p>'))
            }
            
        })
} */

function createProjectFormPage(req, res) {
    res.send(view.createProjectFormPage())
}


function createProject(req, res) {
    const project = {
        name: req.body.name,
        surname: req.body.surname,
        legajo: req.body.legajo,
        year: req.body.year
    }


service.createProject(project)
    .then(function (newProject) {
        res.send(view.createPage('Project cargado', `Project ${newProject.name} ${newProject.surname} cargado con el legajo ${newProject.legajo}</p>`))
    })
    .catch(function (error) {
        res.send(view.createPage('Error', '<p>Ocurrió un error al cargar el project.</p>'))
    })

}


function editProjectForm(req, res) {

    const legajo = req.params.legajo

    service.getProjectByLegajo(legajo)
        .then(function(project) {
            if(project) {
                res.send(view.createEditProjectFormPage(project))
            } else {
                res.send(view.createPage('No se encontró el project', '<h2>No se encontró el project solicitado</h2>'))
            }
        })
}

function editProject(req, res) {
    const legajo = req.params.legajo
    const project = {
        name: req.body.name,
        surname: req.body.surname,
        legajo: req.body.legajo,
        year: req.body.year
    }

    service.editProject(legajo, project)
    .then(function(project) {
        if(project) {
            res.send(view.createPage('Project modificado', `<h2>Project ${project.name} ${project.surname} modificado con éxito.</h2>`))
    } else {
            res.send(view.createPage('No se encontró el project', '<h1>No se encontró el project solicitado</h1>'))
        }
    }
)}

function deleteProjectForm(req, res) {
    const legajo = req.params.legajo
    service.getProjectByLegajo(legajo)
    .then(function(project) {
        if(project) {
            res.send(view.createDeleteProjectFormPage(project))
        } else {
            res.send(view.createPage('No se encontró el proyecto', '<h1>No se encontró el proyecto solicitado</h1>'))
        }
    })
}

function deleteProject(req, res) {
    const legajo = req.params.legajo

    service.deleteProject(legajo)
    .then(function(project) {
        if (project) {
            res.send(view.createPage('Proyecto elminado', `<h2>Proyecto ${project.legajo} eliminado con éxito!</h2>`))
        } else {
            res.send(view.createPage('No se encontró el proyecto', '<h1>No se encontró el proyecto solicitado</h1>'))
        }
    })
}


export {
    getProjects,
   /*  getProjectByLegajo, */
    getProjectBySection,
    createProjectFormPage,
    createProject,
    editProjectForm,
    editProject,
    deleteProject,
    deleteProjectForm,
}