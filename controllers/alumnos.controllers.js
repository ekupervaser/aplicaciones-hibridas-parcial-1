import * as service from "../services/alumnos.services.js"
import * as view from "../views/alumnos.views.js"

function getAlumnos (req, res) {
    service.getAlumnos({deleted: true})
         .then(function(alumnos) {
             res.send(view.createListPage(alumnos))
         })
 
 }


 function getAlumnoByLegajo (req, res) {
    let legajo = req.params.legajo

    service.getAlumnoByLegajo(legajo)
        .then(function(alumno) {
            if (alumno) {
                res.send(view.createAlumnPage(alumno))
            }
            else {
                res.send(view.createPage('Error 404', '<p>Alumno no encontrado</p>'))
            }
            
        })
}

function createAlumnoFormPage(req, res) {
    res.send(view.createAlumnoFormPage())
}


function createAlumno(req, res) {
    const alumno = {
        name: req.body.name,
        surname: req.body.surname,
        legajo: req.body.legajo,
        year: req.body.year
    }


service.createAlumno(alumno)
    .then(function (newAlumno) {
        res.send(view.createPage('Alumno cargado', `Alumno ${newAlumno.name} ${newAlumno.surname} cargado con el legajo ${newAlumno.legajo}</p>`))
    })
    .catch(function (error) {
        res.send(view.createPage('Error', '<p>Ocurrió un error al cargar el alumno.</p>'))
    })

}


function editAlumnoForm(req, res) {

    const legajo = req.params.legajo

    service.getAlumnoByLegajo(legajo)
        .then(function(alumno) {
            if(alumno) {
                res.send(view.createEditAlumnoFormPage(alumno))
            } else {
                res.send(view.createPage('No se encontró el alumno', '<h2>No se encontró el alumno solicitado</h2>'))
            }
        })
}

function editAlumno(req, res) {
    const legajo = req.params.legajo
    const alumno = {
        name: req.body.name,
        surname: req.body.surname,
        legajo: req.body.legajo,
        year: req.body.year
    }

    service.editAlumno(legajo, alumno)
    .then(function(alumno) {
        if(alumno) {
            res.send(view.createPage('Alumno modificado', `<h2>Alumno ${alumno.name} ${alumno.surname} modificado con éxito.</h2>`))
    } else {
            res.send(view.createPage('No se encontró el alumno', '<h1>No se encontró el alumno solicitado</h1>'))
        }
    }
)}

function deleteAlumnoForm(req, res) {
    const legajo = req.params.legajo
    service.getAlumnoByLegajo(legajo)
    .then(function(alumno) {
        if(alumno) {
            res.send(view.createDeleteAlumnoFormPage(alumno))
        } else {
            res.send(view.createPage('No se encontró el alumno', '<h1>No se encontró al alumno solicitado</h1>'))
        }
    })
}

function deleteAlumno(req, res) {
    const legajo = req.params.legajo

    service.deleteAlumno(legajo)
    .then(function(alumno) {
        if (alumno) {
            res.send(view.createPage('Alumno elminado', `<h2>Alumno ${alumno.legajo} eliminado con éxito!</h2>`))
        } else {
            res.send(view.createPage('No se encontró el alumno', '<h1>No se encontró el alumno solicitado</h1>'))
        }
    })
}


export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumnoFormPage,
    createAlumno,
    editAlumnoForm,
    editAlumno,
    deleteAlumno,
    deleteAlumnoForm,
}