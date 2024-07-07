
// left hand side <- instancia objetos
let name = new String('Willyam');
let age = new Number(23);

name.surName = "Roger";

console.log(typeof name.surName)

// ternario
console.log(true ? "oi" : 'hello')

let queijo = true
let mortandela = true;

const cafeDaManha = queijo && mortandela ? "bom" : "Ruim";
console.log(cafeDaManha)