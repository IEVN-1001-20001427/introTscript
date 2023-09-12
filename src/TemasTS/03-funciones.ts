//funciones

function sumar(a:number,b:number) : number {
    return (a + b);
}

let respuesta : number = sumar(4,6);
console.log(respuesta);

function multiplicar (n1:number,otronum:number, base:number=3) : number {
    let tem = n1 * base;
    return tem;
}
console.log(multiplicar(3,5));

interface IMascota {
    nombre:string;
    edad:number;
    mostrarEdad:() => void;
}

function calcular(mascota:IMascota, x:number):void{
    mascota.edad += x;
    console.log(mascota);
}

const nuevaMacsota:IMascota = {
    nombre:'Miau',
    edad:2,
    mostrarEdad() {
        console.log('la edad es de: ',this.edad);
    },
}

calcular(nuevaMacsota,3);
nuevaMacsota.mostrarEdad();