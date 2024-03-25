const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')


console.log("--||Iniciamos o Accounts ||--")

operation()

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair']
        }
    ]).then(
        (answer) => {
            const action = answer['action']
            if (action === 'Criar conta') {
                console.log("Criando a Conta")
                createAccount()
            } else if (action === 'Depositar') {
                console.log('Depositando na sua conta!')
                //deposit()
            } else if (action === 'Consultar Saldo') {
                console.log('Consultando saldo!')
                //getAccountBalance()
            } else if (action === 'Sacar') {
                console.log('Sacando da conta')
                //withdraw()
            } else if (action === 'Sair') {
                console.log(chalk.bgBlue.black('Obrigado por Acessar o Account App'))
                process.exit()
            }
        }
    )
        .catch(err => console.log(err))
}

function createAccount() {
    console.log(chalk.bgGreen.white('Obrigado por utilizar o Account Bank!'))
    console.log(chalk.green('Vamos definir as opções da sua conta ?'))
    buildAccount()
}
function buildAccount() {

    inquirer.prompt([
            {
                name: 'accountName',
                message: 'Forneça o Nome para sua conta no Banco Accounts.'
            }
        ]).then((answer) => {
            const accountName = answer['accountName']

            if (!fs.existsSync('accounts')){
                   fs.mkdirSync('accounts')
            }

            if (fs.existsSync(`accounts/${accountName}.json`)){
               console.log(chalk.bgRed.white(`A conta: ${accountsName} já existe`))
               console.log(chalk.bgRed.white(`Escolha outro nome: `))
               buildAccount(accountName)
            }

            fs.writeFileSync(
                `accounts/${accountName}.json`,
                `{"balance":0}`,
                function(err){
                    console.error(err)
                }
            )

            console.info(chalk.bgGreen.white(`Bem Vindo ao Accounts Bank: ${accountName}`))
            console.info(chalk.green('Obrigado pela referência!!!'))

            operation()
        })
}