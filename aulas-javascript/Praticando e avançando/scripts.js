//Object

const person = {
    name:'Ana',
    age:18,
    weight: 88.7,
    isAdmin: true
}

console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person.weight)
console.log(person.isAdmin)
console.log(`${person.name} tem ${person.age} anos`)


//Array

const animals = [
    'Lion',
    'Monkey',
    {
      name:'Cat',
      age:2
    }    
    
] 
    
//acessar valores dentro do Array
console.log(animals)
console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[2].name)

//1.Declare uma variavel do tipo weiht
let weiht;

//2.Que tipo de variavel é a variavel acima?
console.log(typeof weight)

//3.Declare uma variavel e atribua valores para cada um dos dados:*nome:string *age:Number (integer) *stars:Number (float) *isSubscribed:Boolean

let name = "Matheus"
let age = 24
let stars = 2.3
let isSubscribed = true


//4.A variavel Student abaixo é que tipo de dados?
let student = {
    name: "Matheus",
    age :24,
   weight: 77.1,
  isSubscribed:true

};
console.log(student)
//4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

  /*   
4.2 Mostre no console a seguinte mensagem:<name> de idade <age> pesa <weight> kg 
Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/* 
5. Declare uma variavel do tipo array, 
de nome students e atribua a ela nenhum valor,
ou seja,somente array vazio
*/

let students = []

/*
6. Reatribua valor para variavel acima, colocando dentro dela o objeto student da questao 4.(Não copiar e colar o objeto , mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]
console.log(student)

/*
7. Coloque no console o valor da posição zero do Array acima
*/
console.log(student [0])

/* 
8. Crie um novo student e coloque na posição 1 do Array students
*/

const Mark = {
  name: "Mark",
  age: 30,
  weight:7.11,
  isSubscribed: true 
}

students = [
  student,
  Mark
]
console.log(students)

students[1] = Mark 

/* 
9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e porque?
Após sua resposta,rode o codigo e veja se você acertou.

console.log(a)
var a = 1
*/

// undefined. Porque o a ainda não foi criado//
console.log(a)
var a = 1

console.log(a)
let a = 1


