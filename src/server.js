const express = require('express')
const path = require('node:path')
const router = require('./routes')
const app = express()

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended: true}))
app.use(router)

const port = process.env.PORT ||3333
app.listen(port,()=>{console.log(`servidor criado com sucesso.\n porta: http://localhost:${port}`)})