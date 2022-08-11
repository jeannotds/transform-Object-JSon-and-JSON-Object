const objet = {
    a: 124,
    b: 200,
    c: 300,
    d: 400,
    e: 500,
    f: 125
}


// for(let element in objet){

//     console.log(objet[element])

// }

const transformInObject = JSON.stringify(objet)
console.log(transformInObject)

const transformInJson = JSON.parse(transformInObject)
console.log(transformInJson)