import PromptSync from "prompt-sync" // sem o type module não dápra usar import e com ele não dá pra susar require
import chalk from "chalk"
import moment from "moment"

const prompt = PromptSync()

//const prompt = require("prompt-sync")() ---- import é o padrão mais recente, melhor que require

const salario= Number(prompt(chalk.blue("Valor salário: ")))

const aumento = Number(prompt(chalk.red("Aumento porcentagem: ")))

const total = salario*(1+(aumento/100))

console.log(chalk.yellow(`aumento, ${total.toFixed(2)}`))

function calcIdade(dateString) {
    var hoje = new Date()
    var dataNasc = new Date(dateString)
    var idade = hoje.getFullYear() - dataNasc.getFullYear()
    var m = hoje.getMonth() - dataNasc.getMonth()
    if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--
    }
    return `Idade: ${idade}`
}
//fonte da função:<https://stackoverflow.com/a/7091965>

console.log(chalk.greenBright("------------------------"))

console.log(chalk.blueBright(calcIdade(moment(prompt(chalk.bgGreen("data (DD-MM-YYYY): ")), "DD-MM-YYYY").toDate())))
//npm init pra elaborar o Json com node
//npm init -y responde sim pra tudo
