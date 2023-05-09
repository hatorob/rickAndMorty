const users = require('../utils/users');


const loginUsers = (req,res) => {
    const { email, password } = req.query;
    //console.log(req.query);
    return (users.find( user => user.email === email && user.password === password))
    ? res.status(200).json({access: true})
    : res.status(400).json({access: false})

    /* 
    const userFound = users.find( user => user.email === email && user.password === password);
    
    return userFound
    ? res.status(200).json({access: true})
    : res.status(404).json({access: false})
    */
}


module.exports = loginUsers;