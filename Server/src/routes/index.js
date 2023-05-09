const loginUsers = require('../controllers/login');
const getCharById = require('../controllers/getCharById');
const { postFav, deleteFav } = require('../controllers/handleFavorites');
const express = require("express");
const routers = express.Router();

/* 
GET getCharById: "/character/:id"
GET login: "/login"
POST postFav: "/fav"
DELETE deleteFav: "/fav/:id"
*/

routers.get('/character/:id', getCharById);
routers.get('/login', loginUsers);
routers.post('/fav', postFav);
routers.delete('/fav/:id', deleteFav);

module.exports = routers;