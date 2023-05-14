import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getClientes(filter={}) {
    await client.connect()
    return db.collection("Clientes").find(filter).toArray()
}

async function createCliente(cliente) {
    return db.collection("Clientes").insertOne(cliente)
}


export {
    getClientes,
    createCliente
}