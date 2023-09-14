import {calcularIVA2, Producto} from "./05-desestrucutracion-funciones";

const carrito:Producto[] = [
    {
        desc: 'tel1',
        precio: 1234
    },
    {
        desc: 'tel2',
        precio: 4321
    },
    {
        desc: 'tel3',
        precio: 4312
    },
]

const [total,iva] = calcularIVA2(carrito);
console.log(`total: ${total}`);
console.log(`iva: ${iva}`);