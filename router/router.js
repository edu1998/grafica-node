const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.io.emit('hola-get', {
        msg: 'esto se esta emitiendo'
    })
    res.send({
        msg: 'hola desde mi host grafica',
        // param: req.query
    })
    

});

module.exports = {
    router
}