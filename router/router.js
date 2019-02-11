const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.io.emit('hola-get', 'esto se esta emitiendo')

    res.send({
        msg: 'hola desde mi host grafica',
        param: req.params.id
    })

});

router.get('/pagar', (req, resp) => {
    const { generateCredential } = require('../functions/pagos');
    try {
       resp.status(200).send(generateCredential(req.query));
    } catch (error) {
        resp.status(500).send(error.message)
    }
});

module.exports = {
    router
}