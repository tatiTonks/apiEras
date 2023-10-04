const Era = require('../models/Eras')

exports.crearEra = async(req,res) => {
    console.log(req.body);
    try {
        let eraModel
        eraModel = new Era (req.body)
        await eraModel.save()
        res.send(eraModel)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.obtenerEra = async(req,res ) => {
    try {
        let eraData = await Era.find()
        res.json(eraData)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}
exports.actualizandoEra  = async(req,res ) => {
    res.send('actualizando era')
}

exports.borrandoEra = async(req,res) => {
    res.send('borrando mis sueños e ilusiones')
}
