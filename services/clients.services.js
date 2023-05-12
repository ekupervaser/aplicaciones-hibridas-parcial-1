import { readFile, writeFile } from 'node:fs/promises';
import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getClients(filter={}) {
    await client.connect()
    
    return db.collection("Clients").find(filter).toArray()
}

export {
    getClients
}