// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// // while

// let i = 0;

// while(i < 100) {
    
//     i++;
// }

// for of

let name1 = 'willyam';
let names = ['jonas', 'roger', 'Miguel', 'Diáspora'];

for(let name of names) {
    console.log(name);
}

let person = {
    name: 'Willyam',
    weight: 100,
    height: 182
}

for(let objects in person) {
    console.log(objects)
    console.log(person[objects])
}