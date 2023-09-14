class Persona {
    nombre:string;
    edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`);
    }
}

let persona:Persona;
persona = new Persona('Angel',21);
persona.imprimir();

class Dado{
    private valor:number = 0;

    public tirar(){
        this.generar();
    }

    private generar(){
        this.valor = Math.floor(Math.random()*6)+1;
    }

    public imprimir() {
        console.log(`salio el valor: ${this.valor}`);
    }
}

let dado = new Dado();
dado.tirar();
dado.imprimir();

class Persona2{
    constructor(public nombre:string, public edad:number){ }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`);
    }
}

let persona2:Persona2;
persona2 = new Persona2('Jose',25);
persona2.imprimir();