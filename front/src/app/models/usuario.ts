export class Usuarios {
    _id?:string
    nombre:string
    apellido: String
    email: String
    contrasena: String
    fec_nac: Date



    constructor(nombre: string, apellido: string, email :string,contrasena:string, fec_nac:Date) {

        this.nombre=nombre
        this.apellido = apellido
        this.email = email
        this.contrasena = contrasena
        this.fec_nac = fec_nac
    }
}
