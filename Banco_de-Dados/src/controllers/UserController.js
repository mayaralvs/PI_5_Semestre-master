const connection = require('../database/connection')
const responseModel = {
    sucess: false,
    data: [],
    error: []
}

module.exports = {

    async create (req, res) {
        const response = {...responseModel}

        const{ username, password} = req.body;

        const [ , affectedRows] = await connection.query(`
            INSERT INTO  login VALUES (DEFAULT, '${username}', '${password}', NOW(), NOW())
        `)

        response.sucess = affectedRows > 0
    
        return res.json(response)
    },

    async login (req, res) {
        const response = {...responseModel}

        const { username, password } = req.body;

        const [, data ] = await connection.query(`
            SELECT * FROM login WHERE username = '${username}' AND password = '${password}'
        `)

        console.log(data)

        return res.json(response)
    }
}