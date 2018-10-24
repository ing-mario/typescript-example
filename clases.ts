class Propiedades{
    //estas son las propiedades iniales de un objeto 
    //
    public texto:string;
    public numero:number;
    public arreglo:Array<any>;
    public cualquiera:any;

    // El constructor se utiliza para asignar valor a las propiedades globales
    constructor(){
        this.texto= 'palbra';
        this.numero = 5;
        this.arreglo = ['texto1','teto2',0,true];
        this.cualquiera ={
            'propiedad': 'mia',
            'propiedad2': 'gmi2'
        }
     }



}
// Instanciamos las propiedades del objeto para introducirlo a una variable

let Objecto = new Propiedades

console.log(Objecto);
