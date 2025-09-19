class Persona{

  //sirve para inicializar las propiedas de la clase
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.humor = 80;
  }

  //metodos
  saludar(){
    const mensaje = `Hola, me llamo ${ this.nombre }, y tengo ${ this.edad } años.`;
    return mensaje;
  }

  booleanoAleatorio(){
    const randomBool = Math.floor(Math.random() * 2);
    return randomBool;
  }

  dormir(){
    const numAleatorio = this.booleanoAleatorio();

    if(numAleatorio === 1){
      this.humor = 100;

      return ` ${this.nombre} durmio correctamente y su humor se restablecio a ${this.humor}`;
    }else{
      this.humor = this.humor - 50;

      return ` ${this.nombre} tuvo una noche terrible y su humor disminuyo a ${this.humor}`;
    }
  }

  trabajar(){
    if(this.humor <= 40){
      return `El humor de ${this.nombre} es bajo y se nego a ir a trabajar, y lo echaron 😢`;
    }else{
      return `El humor de ${this.nombre} es alto, fue a trabajar con energia y consiguio un ascenso`;
    }
  }

}

const persona1 = new Persona( "Joaquin", 25 );
const persona2 = new Persona( "Tomas", 35 );


console.log( persona1.saludar() );
console.log( persona1.dormir() );
console.log( persona1.trabajar() );

console.log( persona2.saludar() );
console.log( persona2.dormir() );
console.log( persona2.trabajar() );
