// Con express
const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

/* con ASYNC AWAIT */

const getCharById = async (req,res) => {
    try {
        const { id } = req.params;
        const { data } =  await axios(`${URL}/${id}`)
        const { name, gender, species, origin, image, status } = data
        if(!name) throw new Error(`ID: ${id} not found`);
        const character = {
              id,
              name,
              gender,
              species,
              origin,
              image,
              status
        }
        return res.status(200).json(character) 
        //res.status(404).send("not found");
    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.response.data.error)
        : res.status(500).send(error.response.data.error)
    }
}

module.exports = getCharById;

// Con promesas
/* const getCharById = async (req,res) => {
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

module.exports = getCharById; */

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

//npx kill-port 3001