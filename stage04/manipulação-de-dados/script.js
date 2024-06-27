console.log("9" + 5)
console.log(Number("9") + 5)

let string = '123';
console.log(Number(string));

let number = 123;
console.log(String(number));

// Pegando tamanho de uma string
let word = "Hello World";
console.log(word.length);

let numberLength = 123;
console.log(String(numberLength).length)

// pegando um numero decimal e limitando a apenas duas casa e substituindo o . pro ,
let numberTransform = 1312.3232;
console.log(numberTransform.toFixed(2).replace(".", ","))

// letra minuscula para maiuscula e vice versa

let phrase = "hello world";
console.log(phrase.toUpperCase());

phrase = "HELLO WORLD";
console.log(phrase.toLowerCase());

phrase = "oi eu sou willyma"
// pega a frase e trasnforma em um array
let array = phrase.split(" ");
// junta o array e a cada indice adicionar um '_'
console.log(array.join("_"))

phrase = "Oi tudo bem com voce?";
console.log(phrase.includes("bem"))
console.log(phrase.includes("maça"))

// criando um array a partir de um construtor
let myArray = new Array('a', 'b', 'c');
console.log(myArray)

word = 'manipulacao'
console.log(Array.from(word))

let techs = ["html", "css", "js"];

// adiciona um elemento ao fim do vetor
techs.push('AngularJs')
// adiciona um elemento ao comeco do vetor
techs.unshift("sql")
// tira um valor do fim do vetor
techs.pop()
//tira um valor do comeco do veotr
techs.shift();
// pegar somente alguns valroes do array
// console.log(techs.slice(0, 2))
// remover mais de um indices do array
// console.log(techs.splice(0, 1))

let index = techs.indexOf('css');
console.log(index)
console.log(techs)