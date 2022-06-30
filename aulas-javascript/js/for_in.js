//for...in

let person = {
    name: 'Patricia',
    age: 26,
    weight:75.5
}

for(let property in person) {
    console.log(property)
    console.log(person [property])
}