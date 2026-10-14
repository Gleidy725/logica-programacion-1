let numeros = [];
function llenarLista() {
    let repetidos=false;
    numeros=[document.getElementById("numero1").value,document.getElementById("numero2").value,document.getElementById("numero3").value];
    for (let i = 0; i < 3; i++) {
        for(let y=0; y<i;y++){
            if(numeros[y]==numeros[i]){
                repetidos=true;
            }
        }
    }
    if(repetidos==true){
        alert("Hay números repetidos");
    }
    return numeros;
}


function clasificarNumeros(lista) {
    lista.sort((a, b) => b - a);
    for(let i=0;i<lista.length;i++){

    }
    document.getElementById("resultado").innerHTML =
                "El número mayor es: "+lista[0]+"<br>" +
                "El número medio es: "+lista[1] + "<br>" +
                "El número menor es: "+lista[2];
}