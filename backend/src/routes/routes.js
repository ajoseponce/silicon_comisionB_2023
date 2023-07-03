const express = require('express');

const coneccion = require('../database/bd')

const router = express()

router.get('/', (req , res)=>{
    res.send('esta es la ruta de inicio')
})

router.get('/equipos', (req , res)=>{
    res.send('hola chicos esta es la ruta del listado de equipos.')
})

// app.post('/saludo', (req , res)=>{
//     res.send('<h1>gg saludos</h1>hola chicos ')
// })

module.exports= router;