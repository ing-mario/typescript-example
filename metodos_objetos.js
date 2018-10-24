var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    // METODO Es el algoritmo asociado a un objeto 
    // que indica la capacidad de lo que este puede hacer
    Automovil.prototype.mostrar = function () {
        return "La marca es " + this.marca + " \nEl modelo es " + this.modelo + " \nCaballos de fuerza " + this.hp;
    };
    return Automovil;
}());
// OBJETO Es una entidad provista de metodos o mensajes
// a los cuales responde propiedades con valores concretos
var auto = new Automovil;
auto.marca = 'Dodge';
auto.modelo = 'Challenger';
auto.hp = 850;
console.log(auto.mostrar());
