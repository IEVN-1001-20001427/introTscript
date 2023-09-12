// desestrucutrar objetos y arreglos

interface Reproductor {
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles {
    autor:string;
    year:number;
}

const reproductor : Reproductor = {
    volumen: 60,
    segundo: 80,
    cancion: "mañanitas",
    detalles: {
        autor: "Cepillin",
        year: 1978
    }
}
/*
console.log(reproductor);
console.log(`el volumen actual es: ${reproductor.volumen}`);
console.log(`los segundos son: ${reproductor.segundo}`);
console.log(`la cancion es: ${reproductor.cancion}`);
console.log(`el cantante es: ${reproductor.detalles.autor}`);
console.log(`el año de estreno es: ${reproductor.detalles.year}`);
*/

const {volumen, segundo, cancion,detalles} = reproductor;
const {autor, year} = detalles;

console.log(`el volumen actual es: ${volumen}`);
console.log(`los segundos son: ${segundo}`);
console.log(`la cancion es: ${cancion}`);
console.log(`el cantante es: ${autor}`);
console.log(`el año de estreno es: ${year}`);

const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha'];

console.log(`personaje 1: ${dbz[0]}`);
console.log(`personaje 2: ${dbz[1]}`);
console.log(`personaje 3: ${dbz[2]}`);
console.log(`personaje 4: ${dbz[3]}`);

const [a,,,d] = dbz;

console.log(`personaje 1: ${a}`);
console.log(`personaje 4: ${d}`);