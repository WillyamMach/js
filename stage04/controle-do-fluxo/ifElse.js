let temperature = 37;

if(temperature >= 37) {
    console.log("Esta com febre");
} else {
    console.log("normal")
}

// switch case

let expression = '';

switch (expression) {
    case "a":
        console.log("Oi");
        break;
    case "b":
        console.log("ola");
        break;
    default:
        console.log("Vazio")
        break;
}

// throw try e catch

function sayMyName(name) {
    if(name === '') {
        throw new Error("Nome está vazio");
    }

}

try {
    sayMyName('')

} catch(e) {
    console.log(e)
}