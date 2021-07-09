 const pessoa = {
    nome: 'Débora',
    idade: '24',
    cidade: 'são leopoldo'
 }

 // notação de ponto

console.log(pessoa.nome)

// notação de colchetes

console.log(pessoa['idade'])

// como desestruturar objetos: esse faz com que você não precise escrever "pessoa"

const {nome, idade, cidade} = pessoa

console.log(cidade)