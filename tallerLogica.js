
const prompt = require('prompt-sync')();;
let numeros = [];

function llenarLista() {
    for (let i = 0; i < 3; i++) {
        console.log("Escriba su número " + (i + 1) + ":");
        numeros[i] = prompt();
        for(let y=0; y<i;y++){
            if(numeros[y]==numeros[i]){
                console.log("Hay números repetidos");
            }
        }
    }
    return numeros;
}


function clasificarNumeros(lista) {
    lista.sort((a, b) => b - a);
    for(let i=0;i<lista.length;i++){

    }
    console.log("El número mayor es: "+lista[0]);
    console.log("El número medio es: "+lista[1]);
    console.log("El número menor es: "+lista[2]);
}

clasificarNumeros(llenarLista());


