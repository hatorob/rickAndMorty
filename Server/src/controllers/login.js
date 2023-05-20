const { User } = require("../DB_connection");

const login = async (req,res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password) return res.status(400).send("Faltan datos");

        const userLogin = await User.findOne({
            where: {
                email
            }
        })

        if(!userLogin) return res.status(400).send("Usuario no encontrado");

        return (userLogin.password === password)
        ? res.status(200).json({access: true})
        : res.status(403).send("Contraseña incorrecta");
    } catch (error) {
        return res.status(500).error({error: error.message});
    }

}

module.exports = login;