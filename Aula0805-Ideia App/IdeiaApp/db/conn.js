const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ideias_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Conectamos com o Sequelize!')
} catch (error) {
    console.error(`Não foi possivel conectar:, ${error}`)
}

module.exports = sequelize