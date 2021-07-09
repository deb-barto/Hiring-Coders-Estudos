const livros = require ('./database')
console.log(livros)

// pegar um input do usuario

const readline = require ('readline-sync')
const entradaInicial = readline.question ('Deseja buscar um livro ? (S/N)')

// SE FOR SIM, mostras as categorias disponiveis, e pergunta qual categoria ela escolhe
//SE FOR NÃO, mostra todos os livros em ordem de maior numero de pag

 if ( entradaInicial.toLocaleUpperCase()==='S'){
    console.log('Essas são as categorias disponiveis')
    console.log ('cientifica','/fantasia')
    const entradaCategoria = readline.question ('Escolha uma categoria: ')
    const retorno = livros.filter( livros => livros.categoria === entradaCategoria)
    console.table(retorno)
}
else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas- b.paginas)
    console.log("Esses são todos os livros disponiveis")
    console.table(livrosOrdenados)
}