const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')


const app = express()
app.engine('handlebars', exphbs())

app.set('view engine','handlebars')
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('layouts/main')
})
app.listen(8080, () => {
    console.log('Servidor:http://localhost:3000/')
})
