
const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');
const router = express()
//////////////////////////////
//////////////////////////////
//////////////////////////////
// listar tipos de equipo
// metodo GET
//URL /tipos_equipo
//parametros : ninguno
router.get('/tipos_equipo', (req , res)=>{
    mysqlConnect.query('SELECT * FROM tipos_equipo ', (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
// traer los  datos del tipos_equipo por el ID

// metodo GET
//URL /tipos_equipo/:id_tipo_equipo
//parametros : ninguno
router.get('/tipos_equipo/:id_tipo_equipo', (req , res)=>{
    const { id_tipo_equipo } = req.params
    mysqlConnect.query('SELECT * FROM tipos_equipo WHERE id_tipo_equipo=?', [id_tipo_equipo], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
////////////////////insert de tipos equipo

// metodo POST
//URL /tipos_equipo/
//parametros : en el cuerpo(body) 
    // nombre

router.post('/tipos_equipo', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
  
    mysqlConnect.query('INSERT INTO tipos_equipo (nombre) VALUES (?)', [nombre], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
           res.send('El insert se realizo correctamente')
       }
   })
})


////////////////////edicion de tipos de equipo
// metodo PUT
//URL /tipos_equipo/:id_tipo_equipo
//parametros : 
    // en el cuerpo(body) 
    // nombre
    // y el parametro que vamos a editar ->id_tipo_equipo
router.put('/tipos_equipo/:id_tipo_equipo', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
    const { id_tipo_equipo } = req.params
    mysqlConnect.query('UPDATE tipos_equipo SET nombre = ?  WHERE id_tipo_equipo = ?', [nombre, id_tipo_equipo], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
           res.send('La edicion de registro ' +id_tipo_equipo+ ' se realizo correctamente')
       }
   })
})

///////////////////eliminacion de tipos de equipo
// metodo DELETE
//URL /tipos_equipo/:id_tipo_equipo
//parametros : 
    // y el parametro que vamos a borrar logicamente ->id_tipo_equipo
router.delete('/tipos_equipo/:id_tipo_equipo', bodyParser.json(), (req , res)=>{
    const { id_tipo_equipo } = req.params
    mysqlConnect.query('UPDATE tipos_equipo SET estado = "B"  WHERE id_tipo_equipo = ?', [id_tipo_equipo], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.send('El registro ' +id_tipo_equipo+ ' se dio de baja correctamente')
        }
    })
})
//////////////////////////////
//////////////////////////////
module.exports= router;