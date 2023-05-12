import { readFile, writeFile } from 'node:fs/promises';
import { MongoClient, ObjectId } from 'mongodb';

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")


async function getProjects(filter={}) {
    await client.connect()
    
    return db.collection("Projects").find(filter).toArray()
}


async function getProjectById(id) {
    await client.connect()

    return db.collection("Projects").findOne({_id: new ObjectId(id)})
}


async function saveProjects(projects) {
    await writeFile('./data/projects.json', JSON.stringify(projects))
}


async function getProjectBySection (section) {
    await client.connect()
    return db.collection("Projects").find({section: section}).toArray()

}

async function createProject(project) {

    return db.collection("Projects").insertOne(project)
}

async function editProjectById(id, project) {

    return db.collection("Projects").updateOne({ _id: new ObjectId(id) }, { $set: project})
}

async function replaceProjectById(id, project) {
    return db.collection("Projects").replaceOne({ _id: new ObjectId(id) }, { $set: project})
}


async function deleteProject (id) {
    await client.connect()

    return db.collection("Projects").deleteOne({ _id: new ObjectId(id) })

}

export {
    getProjects,
    getProjectBySection,
    getProjectById,
    createProject,
    editProjectById,
    replaceProjectById,
    deleteProject
}