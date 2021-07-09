// como acessar informações de um vetor
const alunasHiring = [ 'Débora', 'Josi', 'Criptograma', 'Duda', 'Ester', 'Samantha', 'Ana', 'Amanda']
console.log (alunasHiring[2])//

// vamos conhecer o operador sread (...)

const alunasXP = [ ...alunasHiring, 'Milena']
console.log(alunasXP)

//modos de iteração

for ( let i=0; i < alunasXP.length; i++)
{
    console.log(alunasXP[i])
}

//metodos moderno kkkkk : map

alunasXP.map(aluna => console.log(aluna))

// fiter
 const numeros = [34, 45, 67, 90, 55, 76]
 const numeresimpares = numeros.filter(numero => numero% 2 != 0)
console.log(numeresimpares)

const numerespares = numeros.filter(numero => numero % 2 == 0)
console.log(numerespares)

// sort para ordenar numeros

const crescente = numeros.sort((a,b)=> a-b)
console.log(crescente)

const decrescente = numeros.sort((a,b)=>b-a)
console.log(decrescente)

// reduce - reduz o array a um resultado de operação matematica

const numbers = [ 20, 10, 5]

const soma = numbers.reduce((an,at)=>
    {
        return an / at
    })
    console.log(soma)