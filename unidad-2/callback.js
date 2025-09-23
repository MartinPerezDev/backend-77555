function saludar(nombre, callback){
  console.log("Hola "+nombre);

  callback();
}

function despedir(){
  console.log("Adios, que tengas un buen dia");
}


//saludar("Omar", despedir);


let arrayNumeros = [1, 2, 3, 4, 5];

//let nuevoArray = arrayNumeros.map( (numero) => numero + 1);

//console.log(nuevoArray);

function funcionCallback(numero){
  return numero + 2;
}

let nuevoArray = arrayNumeros.map( funcionCallback );
console.log(nuevoArray)