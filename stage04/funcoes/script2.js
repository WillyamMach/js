function Person(name, age, weight) {
    this.name = name;
    this.age = age,
    this.weight = weight
    this.walk = () => {
        return (name + " está andando")
    }
}

// This se refere sempre ao objeto criado, no caso de baixo o this esta se referindo a Willyam, na declaracao acima a ideia é igual a willyam.name = name;;

const Willyam = new Person("Willyam", 19, 89);

console.log(Willyam)
console.log(Willyam.walk())