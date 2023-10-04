const mongoose = require('mongoose')

const eraSchema = mongoose.Schema({
    era: {
    type: String,
    require:true
    },
    numeroDeCanciones: {
        type: Number
    },
    regrabada: {
        type: Boolean
    },
    fec_cre:{
        type: Date,
        default: Date.now(),
    },

})
module.exports = mongoose.model('era', eraSchema)
