// 3 notas de um aluno, fazer a médias, se media igual ou maior que 7, aprovado
// se media igual ou maior 5 e menor igual 7 - recuperação
// se media melhor que 5 - reprovado!


function calculaMedia (nota1, nota2, nota3)
{
    let media = (nota1 + nota2 + nota3)/2

    if ( media >= 7){
        return 'aprovado'
    }

    if ( media >=5 && media <7)
    {
        return 'recuperação'
    }
    if ( media < 5)
    {
        return 'reprovado';
    }
}

console.log(calculaMedia(10,10,10))