import { createPage } from "../pages/utils.js"

function createListPage(alumnos) {
    let html = '<h1>Alumnos</h1>'
    html += '<ul>'

    for (let i = 0; i < alumnos.length; i++) {
        html += `<li>${alumnos[i].name} <a href="/alumnos/${alumnos[i].legajo}">Ver</a> <a href="/alumnos/${alumnos[i].legajo}/edit">Modificar</a> <a href="/alumnos/${alumnos[i].legajo}/delete">Eliminar</a></li>`
    }

    html += '</ul>'

    return createPage('Alumnos', html)
}


function createAlumnPage(alumno) {
    let html = `<h1>${alumno.name} ${alumno.surname}</h1>`
    html += `<p>Legajo: ${alumno.legajo}</p>`
    html += `<p>Año de inscripción: ${alumno.year}</p>`

    return createPage(alumno.name + ' ' + alumno.surname, html)
}

function createAlumnoFormPage() {
    let html = '<h1>Cargar Alumno</h1>'
    html += '<form action="/alumnos/nuevo" method="POST">'
    html += '<input type="text" name="name" placeholder="Nombre">'
    html += '<input type="text" name="surname" placeholder="Apellido">'
    html += '<input type="text" name="legajo" placeholder="Legajo">'
    html += '<input type="text" name="year" placeholder="Año de inscripción">'
    html += '<button type="submit">Cargar</button>'
    html += '</form>'

    return createPage('Cargar alumno', html)
}

function createEditAlumnoFormPage(alumno) {
    let html = '<h1>Modificar Alumno</h1>'
    html += `
    <form action="/alumnos/${alumno.legajo}/edit" method="POST">
    <input type="text" name="name" placeholder="Nombre" value="${alumno.name}">
    <input type="text" name="surname" placeholder="Apellido" value="${alumno.surname}">
    <input type="text" name="legajo" placeholder="Legajo" value="${alumno.legajo}">
    <input type="text" name="year" placeholder="Año de inscripción" value="${alumno.year}">
    <button type="submit">Modificar</button>
    </form>`

    return createPage('Modificar alumno', html)
}

function createDeleteAlumnoFormPage(alumno) {
    let html = `<h1>${alumno.name} ${alumno.surname}</h1>`
    html += `<p>Legajo: ${alumno.legajo}</p>`
    html += `<p>Año de inscripción: ${alumno.year}</p>`

    html += `<form action="/alumnos/${alumno.legajo}/delete" method="POST">
        <p>¿Estás seguro de eliminar el alumno? Esta acción no se podrá deshacer</p>
        <button type="submit">Eliminar</button>
    </form>`

    return createPage(alumno.name + ' ' + alumno.surname, html)
}

export {
    createListPage,
    createAlumnPage,
    createPage,
    createAlumnoFormPage,
    createEditAlumnoFormPage,
    createDeleteAlumnoFormPage,
}