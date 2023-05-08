let http = require('http');
//let data = require('./utils/data');
const { getCharById } = require('./controllers/getCharById');

const PORT = 3001;

http.createServer( (req,res) => {
    //console.log(`Server raised in port ${PORT}`);
    res.setHeader('Access-Control-Allow-Origin', '*'); //Conectar nuestro front con nuestro back
    if(req.url.includes('/rickandmorty/character')) {
        const id = req.url.split('/').at(-1); // Aquí convertimos la url en un array con el split y nos traemos la ultima posición con at(-1);
        getCharById(res,id);
        // LO de bajo era la tarea anterior
        /* const character = data.find( character => character.id === Number(id))
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(character)); */
    }
}).listen(PORT, console.log(`Se levanta el servicio en el puerto ${PORT}`));


module.exports = null;