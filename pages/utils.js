function createPage(title, content) {
    let html;
    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    html += '<title>' + title + '</title><link rel="stylesheet" href="/stylesSection.css"></head><body>';
    html+= content;
    html+= '</body>';
    html+= '<footer>Aplicaciones híbridas - Parcial I - Ezequiel Kupervaser</footer></html>';
    return html;
}


export {
    createPage,
}


