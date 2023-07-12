const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');
const router = express()

// listar modelos
router.get('/', (req , res)=>{
    res.send('El sistema esta funcionando')
})


module.exports= router;