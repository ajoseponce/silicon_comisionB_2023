const express=require('express');
const app = express();

const morgan = require ('morgan')
app.set('puerto' , 2023);
app.use(morgan('dev'))

const coneccion = require('./database/bd')

// app.get('/', (req , res)=>{
//     res.send('hola chicos como estan ??bieeeenn como estan ?? biennn')
// })

// app.get('/equipos', (req , res)=>{
//     res.send('hola chicos esta es la ruta del listado de equipos.')
// })

// app.post('/saludo', (req , res)=>{
//     res.send('<h1>gg saludos</h1>hola chicos ')
// })

app.listen(app.get('puerto'), ()=>{
    console.log('El servidor del profe esta corriendo en el puerto', app.get('puerto'))
})

