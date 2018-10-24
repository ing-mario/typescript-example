var Propiedades = /** @class */ (function () {
    // El constructor se utiliza para asignar valor a las propiedades globales
    function Propiedades() {
        this.texto = 'palbra';
        this.numero = 5;
        this.arreglo = ['texto1', 'teto2', 0, true];
        this.cualquiera = {
            'propiedad': 'mia',
            'propiedad2': 'gmi2'
        };
    }
    return Propiedades;
}());
// Instanciamos las propiedades del objeto para introducirlo a una variable
var Objecto = new Propiedades;
console.log(Objecto);
