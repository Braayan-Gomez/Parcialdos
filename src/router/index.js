const {Router} = require('express');
const router = Router();

const controlador = require('../controller/Admin.controller');

router.get('/', controlador.inicio);
//router.post('/', controlador.inicio);
router.get('/admin', controlador.admin);

router.post('/agregar', controlador.agregar);
router.post('/leerDatos', controlador.leerDatos);

module.exports = router;