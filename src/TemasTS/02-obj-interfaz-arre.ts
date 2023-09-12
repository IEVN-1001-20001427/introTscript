interface IAlumno {
    matricula?:number;
    nombre:string;
    edad:number;
    email:string;
}

const alumno:IAlumno = {
    //matricula:12345,
    nombre:'roberto',
    edad:25,
    email:'roberto@gmail.com'
}

console.table(alumno);



let mascotas = ['perro','gato','perico'];

mascotas[1] = 'nuevo gato'
mascotas.push('ejemplo');
console.log(mascotas);

let tem : (number | string) [] = [];
tem.push(11);
tem.push('Nombre');
console.log(tem);