export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto = {
    desc:'sony erickson',
    precio:1298
}
const tablet:Producto = {
    desc:'ipad air',
    precio:2583
}
function calcularIVA (productos:Producto[]):number {
    let total = 0;
    productos.forEach((producto) => {
        total+=producto.precio;
    })
    return total*.16
}

const articulos1 = [telefono, tablet];
const iva1 = calcularIVA(articulos1);

console.log('el iva es de: ',iva1)

export function calcularIVA2 (productos:Producto[]):[number,number]{
    let total = 0;
    productos.forEach(({precio}) => {
        total += precio;
    })
    return [total,total*.16];
}

const articulos2 = [telefono, tablet];
const [total2,iva2] = calcularIVA2(articulos2);
console.log(`total: ${total2}`);
console.log(`iva: ${iva2}`);