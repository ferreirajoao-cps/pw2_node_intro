const chalk = require("chalk")

function calculadora(n1, n2, op) {
    switch (op) {
        case "+":
            return (n1 + n2).toFixed(2)
        case "-":
            return (n1 - n2).toFixed(2)
        case "*":
            return (n1 * n2).toFixed(2)
        case "/":
            return (n1 / n2).toFixed(2)
        default:
            console.log(chalk.bgRed.black("Oh ca&*(*&*( escolhe uma operação certa"))
            break;
    }
    // if ( op === "+"){
    //     return (n1 + n2)
    // }else
    // if ( op === "-"){
    //     return (n1 + n2)
    // }else
    // if ( op === "/"){
    //     return (n1 + n2)
    // }else
    // if ( op === "*"){
    //     return (n1 + n2)
    // }else{
    //     console.log()
    // } 
}
console.log(chalk.bgYellow.black(calculadora(1557,4589, "+")))
console.log(chalk.bgGreen.black(calculadora(5, 6648, "-")))
console.log(chalk.bgBlue.red(calculadora(529, 798, "*")))
console.log(chalk.bgWhite.red(calculadora(675, 2,"/")));
console.log(chalk.bgMagenta.blue(calculadora(448,49,"#")));