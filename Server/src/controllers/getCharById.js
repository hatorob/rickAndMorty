// Con express
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');



const getCharById = (req,res) => {
    const { id } = req.params;
    console.log(id);
    axios(`${URL}/${id}`)
    .then( response => response.data )
    .then( data => {
        if(data.name) {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                status: data.status
            }
            return res.status(200).json(character);
        }
        return res.status(404).send("not found");
    })
    .catch( error => res.status(500).send(error.message))
}

module.exports = getCharById;

// WEB SERVER
/* const axios = require('axios');

const getCharById = (res,id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then( (response) => response.data)
    .then( (data) => {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            status: data.status
        }
        res.writeHead(200, {"Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch( error => {
        res.writeHead(500, {"Content-type": "text/plain"})
        res.end(error.message)
    })
}

module.exports = {
    getCharById,
}
 */