function createPage(title, content) {
    let html;
    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    html += '<title>' + title + '</title></head><body>';

    html += '<a href="/alumnos">Alumnos</a> | <a href="/alumnos/nuevo">Nuevo alumno</a>'

    html += '<h1>Mini sistema</h1>';



    html+= content;
    html+= '</body></html>';
    return html;
}

function createList(items) {
    let content = '<ul>';
    for (let i = 0; i < items.length; i++) {
        content+='<li>'+
        
        '<h2>' + items[i].name + items[i].surname + '</h2>' +

        '<ul><li>Legajo: ' + items[i].legajo + '</li><li>Año: ' +

        items[i].year + '</li></ul></li>';
    }
    content+='</ul>';
    return content;
}

export {
    createPage,
    createList
}


