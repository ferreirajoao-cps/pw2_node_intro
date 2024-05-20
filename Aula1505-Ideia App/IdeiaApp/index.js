const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')
const conn = require('./db/conn')


const app = express()
const Ideia = require('./models/Ideia')
 
const authRoutes = require('./routes/authRoutes')

app.engine('handlebars', exphbs())
app.set('view engine','handlebars')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.use(flash())

app.use(express.static('public'))
app.use('/',authRoutes)


conn
.sync({force: true})
.then(() => {
    app.listen(3000, () => {
        console.log('Servidor:http://localhost:3000/')
    })
}).catch((err) => {
    console.error(`Error do MySQL / Sequelize ${err}`)
});

