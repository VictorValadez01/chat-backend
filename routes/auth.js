/*  path api/login */

const {Router, response} = require('express');
const { check } = require('express-validator');
const { crearUsuario, login, renewToken, newJWT } = require('../controllers/auth');
const { validarcampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();


router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarcampos
],crearUsuario) ;

router.post('/', [
    check('email', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty()
], login);

router.get( '/newJWT',validarJWT, newJWT)

router.get('/renew', validarJWT, renewToken);

module.exports = router;