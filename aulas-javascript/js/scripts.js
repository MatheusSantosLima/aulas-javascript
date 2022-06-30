/*

Buscando e contanto dados no Array
Baseado no Array de livro por categoria abaixo, faça o sequinte desafio
.Contar o numero de categorias e o numero de livro em cada categoria 
.Contar o numero de autores 
.Mostrar livro do autor Augusto Curry 
.Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor .
*/

const booksByCategory =  [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T.Harv Eker",
            },
            {
                title: "O mais rico da Babilônia",
                author: "George S.Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. kiyosaki e Sharon L. Lechter",
            },
            
        ],

    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é Insubtituivel",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade-Como enfretar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
    
];

const totalCategory = booksByCategory.length

console.log(totalCategory);
for(let category of booksByCategory){
    console.log('total de livros da categoria: ', category.category)
    console.log('category.books.length: ', category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author)== -1) {
                authors.push(book.author)
            }
    }
}
console.log("total de autores:",  authors.length)
}
countAuthors();

function booksOfAuthor(author) {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'author') {
                books.push(book.title)
            }
    }
}
console.log(`Livros do autor ${author}: $ {books.join (",")}`)
}
booksOfAuthor('Augusto Cury')