// function expression
//function anonymous
let total = 0

//parametros (parameters)
const sum = function(number1, number2) {
    let total = number1 + number2
    return total 

}


let number1 = 34
let number2 = 25


//console.log('O numero 1 é ${number1}')
//console.log('O numero 2 é ${number2}')
console.log('a soma é ${sum(number1, number2)}' )
console.log(total)

// função é um liquidificador 

function fazersuco(fruta1, fruta2) {
    return ' suco de: ' + fruta1 + fruta2
}
const copo = fazersuco('banana', 'maça')

console.log(copo)

//function scope
let subject = 'create video'
function createTrink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createTrink(subject))

// function hoisting


sayMyName();

function sayMyName(){
    console.log('Bem vindos ao Show')
}



//arrow function
/*
const sayMyName = (name) => {
    console.log('name')
}

sayMyName('Matheus')
*/


//callback function

function sayMyName (name) {
    console.log('antes de executar a função callback')
    
     name() 
    
    console.log('depois de execultar a callback') 
}


sayMyName (
    () => {
        console.log('estou em uma callback')
    }
)


/*
function constructor

*expressão new
*Criar um novo objeto
*this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + "está andando"
    }
}

const Matheus = new Person("Matheus")
const Simon = new Person ("Simon")
console.log(Matheus.walk())
console.log(Simon.walk())

let name = new String ("Miguel") 
console.log(name)

let date = new Date("2022-03-14")
console.log(date)