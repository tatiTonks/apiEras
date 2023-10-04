const express = require('express')
const router = express.Router()
const erasController = require('../controllers/eras.controller')
const vestuarioController = require('../controllers/vestuario.controller')
const usuarioController = require('../controllers/usuario.controller')

router.get('/obtener-eras', erasController.obtenerEra)
router.post('/crear-era', erasController.crearEra)
router.put('/', erasController.actualizandoEra)
router.delete('/', erasController.borrandoEra)

//vestuarios
router.post('/crear-vestuario', vestuarioController.crearVestuario)
router.get('/obtener-vestuario', vestuarioController.obtenerTodosVestuarios)
router.get('/obtener-vestuario/:id', vestuarioController.obtenervestido)
router.delete('/borrar-vestuario/:id', vestuarioController.borrandoVestuario)

//usuarios
router.post('/crear-usuario', usuarioController.crearUsuario)
router.get('/obtener-usuario', usuarioController.obtenerTodosUsuarios)
router.get('/obtener-usuario/:id', usuarioController.obtenerusuario)
router.put('/actualizandoUsuario/:id', usuarioController.actualizandoUsuario)
router.delete('/borrar-usuario/:id', usuarioController.borrandoUsuario)

module.exports = router


