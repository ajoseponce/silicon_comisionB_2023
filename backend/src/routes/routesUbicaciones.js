const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');
const router = express()
//////////////////////////////
//////////////////////////////
// listar tipos de equipo
// metodo GET
//URL /ubicaciones
//parametros : ninguno
router.get('/ubicaciones', (req , res)=>{
    mysqlConnect.query('SELECT * FROM ubicaciones ', (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
// traer los  datos del ubicaciones por el ID

// metodo GET
//URL /ubicaciones/:id_ubicacion
//parametros : ninguno
router.get('/ubicaciones/:id_ubicacion', (req , res)=>{
    const { id_ubicacion } = req.params
    mysqlConnect.query('SELECT * FROM ubicaciones WHERE id_ubicacion=?', [id_ubicacion], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
////////////////////insert de tipos equipo

// metodo POST
//URL /ubicaciones/
//parametros : en el cuerpo(body) 
    // nombre

router.post('/ubicaciones', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
  
    mysqlConnect.query('INSERT INTO ubicaciones (nombre) VALUES (?)', [nombre], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
        res.json({
            status:true,
            mensaje: "El insert se realizo correctamente"
            })
       }
   })
})


////////////////////edicion de ubicaciones
// metodo PUT
//URL /ubicaciones/:id_ubicacion
//parametros : 
    // en el cuerpo(body) 
    // nombre
    // y el parametro que vamos a editar ->id_ubicacion
router.put('/ubicaciones/:id_ubicacion', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
    const { id_ubicacion } = req.params
    mysqlConnect.query('UPDATE ubicaciones SET nombre = ?  WHERE id_ubicacion = ?', [nombre, id_ubicacion], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
         res.json({
            status:true,
            mensaje: "La actualizacion se realizo correctamente"
            })
       }
   })
})

///////////////////eliminacion de ubicaciones
// metodo DELETE
//URL /ubicaciones/:id_ubicacion
//parametros : 
    // y el parametro que vamos a borrar logicamente ->id_ubicacion
router.delete('/ubicaciones/:id_ubicacion', bodyParser.json(), (req , res)=>{

    const { actualizar }  = req.body
    const { id_ubicacion } = req.params
    mysqlConnect.query('UPDATE ubicaciones SET estado = ?  WHERE id_ubicacion = ?', [actualizar, id_ubicacion], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json({
                status:true,
                mensaje: "El cambio de estado se realizo correctamente"
                })
        }
    })
})

//////////////////////////////
//////////////////////////////
module.exports= router;