// primeiro algoritimo de busca
var valores = [5, 8, 10 , 22, 38, 45, 60, 90, 100, 120]

//busca binária, precisa estar ordenados os valores

function buscaBin(num){
    let inicio, fim
    let meio;
    inicio = 0;
    fim = 9;

    while (inicio <= fim){
        meio = parseInt((inicio + fim)/2);

        if (num == valores[meio]){
            return meio;
        }

        else{
            if (num > valores[meio]){
            inicio = meio + 1;
            }
            else{
                fim = meio - 1;
            }
        }
    }
    return -1;
}
// usando a busca
console.log(buscaBin(10));
console.log(buscaBin(60));