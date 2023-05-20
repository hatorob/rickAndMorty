const loginUsers = require('../controllers/login');
const postUser = require("../controllers/postUser");
const getCharById = require('../controllers/getCharById');
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const express = require("express");
const routers = express.Router();

/* 
GET getCharById: "/character/:id"
GET login: "/login"
POST postFav: "/fav"
DELETE deleteFav: "/fav/:id"
*/

routers.get('/login', loginUsers);
routers.post('/login', postUser);
routers.post('/fav', postFav);
routers.delete('/fav/:id', deleteFav);
routers.get('/character/:id', getCharById);

module.exports = routers;