class Automovil{
    public marca:string;
    public modelo:string;
    public hp:number;
    // METODO Es el algoritmo asociado a un objeto 
    // que indica la capacidad de lo que este puede hacer

    public mostrar(){

        return `La marca es ${this.marca} \nEl modelo es ${this.modelo} \nCaballos de fuerza ${this.hp}`
    }
}

// OBJETO Es una entidad provista de metodos o mensajes
// a los cuales responde propiedades con valores concretos

let auto = new Automovil;
auto.marca = 'Dodge';
auto.modelo = 'Challenger';
auto.hp = 850;

console.log(auto.mostrar());
