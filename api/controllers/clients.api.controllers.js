import * as service from '../../services/clients.services.js'

function getClients(req, res) {

    service.getClients(req.query)
        .then(function(clients) {
            if (clients) {
                res.status(200).json(clients)
            }
            else {
                res.status(404).json({error:{message: `No se encontraron clientes`}})}
        })
}

function createClient(req, res) {
    const client = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion,
    }

    service.createClient(client)
        .then(function(client) {
        res.status(201).json(client)
    })
}

export {
    getClients,
    createClient
}