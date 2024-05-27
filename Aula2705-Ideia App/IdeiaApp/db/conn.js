const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('ideias_db', 'ferreira', 'Jgf271206', {
    host: 'dadosappideiasferrerinha.mysql.database.azure.com',
    dialect: 'mysql',
    ssl: true
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao servidor AzureMYSQL!')
} catch (error) {
    console.error(`Não foi possivel conectar:, ${error}`)
}

module.exports = sequelize