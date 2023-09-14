class Person{
    protected nombre:string;
    protected edad:number;

    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }

    imprimir(){
        console.log(`Nombre: ${this.nombre} y Edad: ${this.edad}`);
    }
}

class Empleado extends Person{
    private sueldo:number;

    constructor(nombre:string, edad:number, sueldo:number){
        super(nombre, edad);
        this.sueldo = sueldo;
    }

    imprimir(){
        console.log(`Sueldo: ${this.sueldo}`);
    }

    pagatImpuestos(){
        if (this.sueldo>5000){
            console.log(`${this.nombre} debe pagar impuestos`);
        } else {
            console.log(`${this.nombre} no debe pagar impuestos`);
        }
    }
}

const person = new Person('juan', 44);
person.imprimir();

const empleado = new Empleado('angel',21,7000);
empleado.imprimir();
empleado.pagatImpuestos();