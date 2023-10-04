export class Vestuarios {
    _id?:string
    nombre:string
    era: String
    imagen: String
    surpriseSong:Boolean
    designer:string


    constructor(nombre: string, era: string, imagen :string,surpriseSong:boolean, designer:string) {

        this.nombre=nombre
        this.era = era
        this.imagen = imagen
        this.surpriseSong = surpriseSong
        this.designer = designer
    }
}
