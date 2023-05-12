import { createPage } from "../pages/utils.js"

function createProjectPage(projects, section) {
    let html = `<h1>Proyectos de ${section}</h1>`
    
    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];

        html += `<h2>${project.name}</h2>`
        html += `<ul>`
        html += `<li><img src="${project.img}" alt="Imagen del proyecto ${project.name}"></li>`
        html += `<li>Descripción: ${project.description}</li>`
        html += `<li>Tecnologías: ${project.technologies}</li>`
        html += `<li>Link al repositorio: ${project.link}</li>`
        html += `</ul>`
    }

    return createPage("Proyectos", html)
}


export {
    createProjectPage,
    createPage,
}