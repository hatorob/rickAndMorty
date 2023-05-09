let myFavorites = [];

const postFav = (req,res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
}

const deleteFav = (req,res) => {
    const { id } = req.params;
    console.log(id);
    myFavorites = myFavorites.filter( character => character.id !== id)
    console.log(myFavorites);
    return res.status(200).json(myFavorites);
}

module.exports = {
    postFav,
    deleteFav
}