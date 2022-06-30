//Opradores de Comparação

//Irá comparar valores e retornar um Boolean com resposta à comparação

let one = 1
let two = 2


// == igual a

console.log(two == 1)
console.log(one == "1")

//!= diferente de 
console.log(one != two)
console.log(one != 1)
console.log(one != "1")


// === estritamente igual a
console.log(one === 1)
console.log(one === "1")

//!== estritamente diferente de 
console.log(two !== 2)
console.log(two !== "2")

//> Maior que
console.log(one > two)

//>= Maior igual a
console.log(one >= 1)
console.log(two >= 1)

//< Menor que
console.log(one < two)

//<= Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)


// Operadores de atribuição (assigment)

let x

//assignment
x = 1
console.log(x)

//addition assigment
//x = x + 2
x += 2
console.log(x)

//subtraction assigment
//x = x - 1
x -= 1
console.log(x)

//multiplication assigment
//x = x * 2
x *= 2
console.log(x)

//division assigment
//x = x / 2
x /= 2
console.log(x)

//remainder, exponetiation
x %= 2
x **= 2
console.log(x)


//Operadores logicos (logical operators)

// -2 valores Booleanos, quando verificados,
//resultará em verdadeiro ou falso 
let pao = true
let queijo = true

//AND &&
console.log(pao && queijo )

//OR ||
console.log(pao || queijo)

//NOT !
console.log(!pao)

// operador condicional (ternario)

//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2 
//condition ? value1 : value2

//Exemplos
//Café da manha top
//let pao = true
//let queijo = true 

const niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

//Maior de 18
let age = 16
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)


//Operador de String (String operator)

//comparison (comparação)
console.log('a' == 'b')

//concatenation (concatenação)
//Retorna a união de duas strings
let alpha = 'alpha'
console.log('alpha' + 'bet' + 's')

/*

Operador precendence
Precedência de operadores 

-grouping    ()
-negação e incremento ! ++ --
-multiplicação e divisão * /
-adição e subtração + -
-relacional < <= > >=c
-igualdade == != === !==
-AND &&
-OR ||
-condicional ?:
-assigment (atribuição) = += -= *= %=
*/
console.log((2 + 5) * 4)
console.log(4 > 2)
console.log(true == 1)
console.log(false == 0)









