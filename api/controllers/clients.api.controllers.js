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

export {
    getClients
}