import { readFile, writeFile } from 'node:fs/promises';

async function getAlumnos(filter={}) {
    return  readFile('data/alumnos.json')
    .then(function(data) {
        return JSON.parse(data)
    })
    .then (function (alumnos) {
        if (filter.deleted) {
            const alumnosFilter = []
            for (let i = 0; i < alumnos.length; i++) {
                if (!alumnos[i].deleted) {
                    alumnosFilter.push(alumnos[i])
                }
            }
            return alumnosFilter
        } else {
            return alumnos
        }
    })
    .catch(function(err) {
        return [] 
})

}

async function saveAlumnos(alumnos) {
    await writeFile('./data/alumnos.json', JSON.stringify(alumnos))
}


async function getAlumnoByLegajo (legajo) {
    return getAlumnos()
        .then(function(alumnos) {

            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].legajo == legajo) {
                    return alumnos[i]
                }             
            }
            return null
        })
}

async function createAlumno(alumno) {
    const alumnos = await getAlumnos()
    const newAlumno = {
        name: alumno.name,
        surname: alumno.surname,
        legajo: alumno.legajo,
        year: alumno.year
    }
    alumnos.push(newAlumno)
    await saveAlumnos(alumnos)
        return newAlumno
}

async function editAlumno(legajo, alumno) {
    const alumnos = await getAlumnos()
    let editedAlumno = null

    for (let i = 0; i < alumnos.length; i++) {
       if(alumnos[i].legajo == legajo) {
        alumnos[i] = {
            ...alumno,
            legajo:alumnos[i].legajo
        }
        editedAlumno = alumnos[i]
        break;
       }
    }

    if(editAlumno) {
        await writeFile('./data/alumnos.json', JSON.stringify(alumnos))
    }

    return editedAlumno
}

async function deleteAlumno(legajo) {
    const alumnos = await getAlumnos()
    let deletedAlumno = null

    for (let i = 0; i < alumnos.length; i++) {
       if(alumnos[i].legajo == legajo) {
        alumnos[i].deleted = true
           
        deletedAlumno = alumnos[i]
        break;
       }
    }

    if(editAlumno) {
        await writeFile('./data/alumnos.json', JSON.stringify(alumnos))
    }

    return deletedAlumno
}

export {
    getAlumnos,
    getAlumnoByLegajo,
    createAlumno,
    editAlumno,
    deleteAlumno
}