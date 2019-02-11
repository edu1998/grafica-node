const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http);



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// cors use
app.use(cors())



io.on('connection', (socket) => {
    console.log("usuario conectado");
});


const {
    router
} = require('./router/router');

app.use((req, res, next) => {
    req.io = io;
    next();
});
app.use('/router', router);

http.listen(1001, () => console.log(`listening on http://localhost:1001`));
