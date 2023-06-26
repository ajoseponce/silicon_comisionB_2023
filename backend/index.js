const express=require('express');
const app = express();

const morgan = require ('morgan')
app.set('puerto' , 2023);
app.use(morgan('dev'))

app.get('/', (req , res)=>{
    res.send('hola chicos')
})

app.get('/hola', (req , res)=>{
    res.send('hola chicos esto ingreso aca ahora')
})

app.post('/saludo', (req , res)=>{
    res.send('<h1>gg saludos</h1>hola chicos esto esta entrando en el metodo post')
})

app.listen(app.get('puerto'), ()=>{
    console.log('El servidor del profe esta corriendo en el puerto', app.get('puerto'))
})

