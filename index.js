const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
    router
} = require('./router/router');
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

app.use('/router', router)

http.listen(1001, () => console.log(`listening on http://localhost: 5050`));