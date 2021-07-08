// div 3 = fizz
//div 5 = buzz
// div 3 e 5 = fizzbuzz
// não é um numero
// não for div por 5 ou 3 => inicio


function FizzBuzz (entrada)
{
    if (typeof entrada !== 'number')
        return 'Não é um numero'; 
    if ((entrada % 3 == 0) && (entrada % 5 == 0))
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "Fizz";
    if (entrada %5 === 0)
        return "Buzz";
        
    return entrada;
}

let resultado = FizzBuzz(4);
console.log(resultado)
