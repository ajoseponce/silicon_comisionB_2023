const express=require('express');
const app = express();

const morgan = require ('morgan')

app.set('puerto' , 2023);

app.use(morgan('dev'))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(require('./routes/routes'))
app.use(require('./routes/routesTipoEquipo'))
app.use(require('./routes/routesUbicaciones'))
app.use(require('./routes/routesModelos'))
app.use(require('./routes/routesFabricantes'))
app.use(require('./routes/routesEquipos'))
app.use(require('./routes/routesUsuarios'))

app.listen(app.get('puerto'), ()=>{
    console.log('El servidor del profe esta corriendo en el puerto', app.get('puerto'))
})

