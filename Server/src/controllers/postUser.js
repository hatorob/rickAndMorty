const { User } = require("../DB_connection");

const postUser = async (req,res) => {
    try {
        const { email, password } = req.body;
        if(email.length > 0 && password.length > 0) {
            const newUser = await User.findOrCreate({
                where: {
                    email,
                    password
                }
            })
            res.status(200).json(newUser);
        } else {
            return res.status(400).send("Faltan datos")
        }
        
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}


module.exports = postUser;