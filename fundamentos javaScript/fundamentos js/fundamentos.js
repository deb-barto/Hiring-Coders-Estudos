// entendendo escopos e variaveis.

var myName = "Débora" // string;

let language = "Java Script";

const pattern = "ECMAscript";

{
    var age =24; // number
    var height = 1.70; //number float

    null
    undefined

    var isStudent = false; // boolean

    // objeto, array e function

    var  person = {
        "name": "Débora",
        "Age":24,
        "height": 1.70
    }
    
var students = ["Débora", "Adrian", "Gabriela"];

function sum (a,b){
    return a + b;
}
}
console.log(age)
console.log(myName)

// operador typeof

age = 32;
console.log(typeof age)

//aprendendo funções

function sayHello (name, LastName){
    console.log("hello " + name + ' ' +  LastName)
}
sayHello("DEBRA", "barto") // DEBRA É O ARGUMENTO

;

// OPERAÇÕES!

 function soma (a,b){
     return a + b;
 }
 console.log(soma(10,10));

// lidando com classes

class Book {
    constructor(title, author, pages)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read()
    {
       return `Estou lendo ${this.title}`  
    }
}

let abook = new Book ('adrian', 'valentin', 100);
console.log(abook);

class ITBook extends Book {
   constructor (title, author, pages, tecnology){
        super (title, author, pages)// lista as caracteristicas que quer herdar
        this.tecnology = tecnology;
    }
}
let itBook = new ITBook ('GG', 'EASY', 1000, 'topologia');
console.log(itBook);

// Conceito de enpapsulamento

class Person {
    constructor(name) {
        this._name = name;
    }   
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let person = new Person ("Simara");
person.name = 'Jia'
console.log (person.name)