const express = require('express')
const app = express() //instanciando o express
require('dotenv').config()  // pegando as variaveis

app.use(express.json())

const protocol = process.env.PROTOCOL || "http"
const ip = require('ip').address()
const port = process.env.PORT || 3030

const routes = require('./routes')
app.use(routes)

//endereço que está rodando
app.listen(port, () => console.log(`Server started in http://localhost:${port} or ${protocol}://${ip}:${port}`));   