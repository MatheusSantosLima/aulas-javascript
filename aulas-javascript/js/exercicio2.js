/*### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array

*receita : []
*despesa : []

Agora, crie uma função que irá calcular o total de receitas e despesa e irá mostrar uma mensagem se familia está com o saldo positivo ou negativo,sequido do valor do saldo

*/

let family = {
    incomes:[2500,3200,250.43,360.45],
    expenses:[320.34, 128.5, 176.5, 1450.6]
}

function sum(array){
    let total = 0
    for(let value of array) {
        total += value
    }
        return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOK = total >= 0
    
    
    let balanceText = "negativo"
    
    if (itsOK) {
        balanceText = "positivo"

    }
    console.log('Seu saldo é ${balanceText}:${total.toFixed(2)}R$')
}


calculateBalance()




