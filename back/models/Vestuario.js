const mongoose = require('mongoose')

const vestuarioSchema = mongoose.Schema({
    nombre:{
        type:String
    },
    era: {
    type: String,
    require:true
    },
    imagen: {
        type: String
    },
    surpriseSong:{
        type:Boolean
    },
    designer:{
        type:String
    },
    fec_cre:{
        type: Date,
        default: Date.now(),
    },

})
module.exports = mongoose.model('vestuario', vestuarioSchema)
//////////////aquí el 'era' es el nomre de la coleccion que mongo va a crear
