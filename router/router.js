const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.io.broadcast.emit('hola-get','esto se esta emitiendo')
    
    res.send({
        msg: 'hola desde mi host grafica',
        param: req.params.id
    })

});

module.exports = {
    router
}