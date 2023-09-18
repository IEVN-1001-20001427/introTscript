class PilaEnteros {
    private vec:number [] = [];
    
    insertar(x:number){
        this.vec.push(x);
    }

    extraer(){
        if(this,this.vec.length > 0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}

class PilaString {
    private vec:string [] = [];
    
    insertar(x:string){
        this.vec.push(x);
    }

    extraer(){
        if(this,this.vec.length > 0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}

let pila = new PilaEnteros();
pila.insertar(20);
pila.insertar(23);
pila.insertar(2);
console.log(pila.extraer())

let pilaS = new PilaString();
pilaS.insertar('juan');
pilaS.insertar('ana');
pilaS.insertar('luis');
console.log(pilaS.extraer())

class PilaGenerica <T>{
    private vec:T [] = [];
    
    insertar(x:T){
        this.vec.push(x);
    }

    extraer(){
        if(this,this.vec.length > 0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}

let pilaG = new PilaGenerica<number>;
pilaG.insertar(20);
pilaG.insertar(23);
pilaG.insertar(2);
console.log(pilaG.extraer())

let pilaGS = new PilaGenerica<string>;
pilaGS.insertar('juan');
pilaGS.insertar('ana');
pilaGS.insertar('luis');
console.log(pilaGS.extraer())