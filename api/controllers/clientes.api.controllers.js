import * as service from '../../services/clientes.services.js'

function getClientes(req, res) {

    service.getClientes(req.query)
        .then(function(clientes) {
            if (clientes) {
                res.status(200).json(clientes)
            }
            else {
                res.status(404).json({error:{message: `No se encontraron clientes`}})}
        })
}

function createCliente(req, res) {
    const cliente = {
        nombre: req.body.nombre,
        foto: req.body.foto,
        descripcion: req.body.descripcion,
    }

    service.createCliente(cliente)
        .then(function(cliente) {
        res.status(201).json(cliente)
    })
}

export {
    getClientes,
    createCliente
}