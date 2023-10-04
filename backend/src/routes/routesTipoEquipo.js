
const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');
const router = express()
const jwt = require('jsonwebtoken')
//////////////////////////////
//////////////////////////////
//////////////////////////////
// listar tipos de equipo
// metodo GET
//URL /tipos_equipo
//parametros : ninguno
router.get('/tipos_equipo', verificarToken, (req , res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('SELECT * FROM tipos_equipo ', (error, registros)=>{
                if(error){
                    console.log('Error en la base de datos', error)
                }else{
                    res.json(registros)
                }
            })
        }
    })
})
// traer los  datos del tipos_equipo por el ID

// metodo GET
//URL /tipos_equipo/:id_tipo_equipo
//parametros : ninguno
router.get('/tipos_equipo/:id_tipo_equipo', verificarToken, (req , res)=>{
    const { id_tipo_equipo } = req.params
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('SELECT * FROM tipos_equipo WHERE id_tipo_equipo=?', [id_tipo_equipo], (error, registros)=>{
                if(error){
                    console.log('Error en la base de datos', error)
                }else{
                    res.json(registros)
                }
            })
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
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('INSERT INTO tipos_equipo (nombre) VALUES (?)', [nombre], (error, registros)=>{
            if(error){
                console.log('Error en la base de datos', error)
            }else{
                res.json({
                    status:true,
                    mensaje: "El registro se realizo correctamente"
                    })
            }
        })
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
router.put('/tipos_equipo/:id_tipo_equipo', bodyParser.json(), verificarToken, (req , res)=>{
    const { nombre }  = req.body
    const { id_tipo_equipo } = req.params
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('UPDATE tipos_equipo SET nombre = ?  WHERE id_tipo_equipo = ?', [nombre, id_tipo_equipo], (error, registros)=>{
            if(error){
                console.log('Error en la base de datos', error)
            }else{
                res.json({
                    status:true,
                    mensaje: "La actualizacion se realizo correctamente"
                    })
            }
            })
        }
    })
})

///////////////////eliminacion de tipos de equipo
// metodo DELETE
//URL /tipos_equipo/:id_tipo_equipo
//parametros : 
    // y el parametro que vamos a borrar logicamente ->id_tipo_equipo
router.delete('/tipos_equipo/:id_tipo_equipo', bodyParser.json(), verificarToken, (req , res)=>{

    const { actualizar }  = req.body
    const { id_tipo_equipo } = req.params
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('UPDATE tipos_equipo SET estado = ?  WHERE id_tipo_equipo = ?', [actualizar, id_tipo_equipo], (error, registros)=>{
                if(error){
                    console.log('Error en la base de datos', error)
                }else{
                    res.json({
                        status:true,
                        mensaje: "El cambio de estado se realizo correctamente"
                        })
                }
            })
        }
    })
})

function verificarToken(req, res, next){
    const bearer= req.headers['authorization'];
    if(typeof bearer!=='undefined'){
        const token =bearer.split(" ")[1]
        req.token= token;
        next()
    }else{
        res.send('Debe contener un token')
    }
 }
//////////////////////////////
//////////////////////////////
module.exports= router;