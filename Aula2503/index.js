const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const { abort } = require('process')


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
                deposit()
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
function deposit(){
    inquirer.prompt([
    {
        name:'accountName',
        message:'Qual conta deseja Depositar ?'
     }   
]).then((answer)=> {
    const accountName = answer['accountName']

    if (!checkAccount(accountName)){
         return deposit()
    }

    inquirer.prompt([
    {
        name:'amount',
        message:'Quanto deseja depositar: '
    }    
    ]).then((answer)=> {
        const amount= answer['amount']

        addAmount(accountName, amount)
        operation()
    })
})
}
function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.error(chalk.bgRed.black(`A conta ${accountName} não existe! Tente outro nome`))
        return false
    }
    return true
}
function addAmount(accountName, amount){
    const accountData = getAccount (accountName)
    if (!amount){
        console.error(chalk.bgRed.black('Não há valor a ser despositado!'))
    deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat (accountData.balance)
    

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err){
            console.error(err)
        }

    )
    console.info(chalk.bgGreen.white(`o valor : ${amount}, foi depositado!`))
}
function getAccount(accountName){
    const accountJson = fs.readFileSync(`accounts/${accountName}.json`,
    {
        encoding: 'utf-8',
        flag:'r'

    })

    return JSON.parse(accountJson)
}
