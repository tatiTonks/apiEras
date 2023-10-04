const Vestuario = require('../models/Vestuario')

exports.crearVestuario = async (req, res) => {
    console.log(req.body);
    try {
        let vestuarioModel
        vestuarioModel = new Vestuario(req.body)
        await vestuarioModel.save()
        res.send(vestuarioModel)
    } catch (error) {
        console.log(error);
        res.status(502).json({msg:'jejé no sé que paso'})
    }
}

exports.obtenerTodosVestuarios = async (req, res) => {
    try {
        let vestuarioData = await Vestuario.find()
        res.json(vestuarioData)
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}
exports.obtenervestido = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {

            const vestuarioData = await Vestuario.findById(req.params.id)
            console.log('file:vestuario.controller.js:29 -> vestuarioData: ', vestuarioData)
            if (!vestuarioData) {
                res.status(404).send("Esto no existe manito")
            } else {
                res.json(vestuarioData)
            }
        } else {
            res.status(418).send('el id no exis o no es correctisimo')
        }
    } catch (error) {
        console.log(error);
        res.status(502).send('jejé no sé que paso')
    }
}

exports.actualizandoVestuario = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const vestuarioData = await Vestuario.findById(req.params.id)
            if (!vestuarioData) {
                res.status(404).send('Personaje no encontrado')
                
            } else{
                res.json(vestuarioData)
            }
        }else {
            res.status(418).send('el id no exis o no es correctisimo')
        }
    }catch (error){
            console.log(error);
            res.status(502).send('jejé no sé que paso')
        }
    }

exports.borrandoVestuario = async (req, res) => {
    console.log(req.ip);
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const vestuarioData = await Vestuario.findById(req.params.id)
            if (!vestuarioData) {
                return res.status(404).send("Esto no existe manito")
            } else {
                await Vestuario.findOneAndRemove({ _id: req.params.id })
                return res.send("Borrando mis sueños e ilusiones :C")
            }
        } else {
            return res.status(400).send("ID no válido")
        }
    } catch (error) {
        console.log(error);
        return res.status(502).send('jejé no sé qué pasó')
    }
};
