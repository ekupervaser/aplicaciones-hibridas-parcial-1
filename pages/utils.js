function createPage(title, content) {
    let html;
    html = '<!DOCTYPE html><html><head><meta charset="UTF-8">';
    html += '<title>' + title + '</title></head><body>';
    html+= content;
    html+= '</body></html>';
    return html;
}


export {
    createPage,
}


