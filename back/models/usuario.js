const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nombre: {
    type: String,
    require:true
    },
    apellido: {
        type: String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    contrasena:{
        type:String,
        require:true
    },
    fec_nac:{
        type:Date,
    },
    fec_cre:{
        type: Date,
        default: Date.now(),
    },

})
module.exports = mongoose.model('usuario', usuarioSchema)
//////////////aquí el 'era' es el nomre de la coleccion que mongo va a crear
