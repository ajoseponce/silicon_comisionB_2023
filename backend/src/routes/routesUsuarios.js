const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');
const router = express()
const jwt = require('jsonwebtoken')

const bcrypt= require('bcrypt');
//////////////////////////////
//////////////////////////////
// listar usuarios
// metodo GET
//URL /usuarios
//parametros : ninguno
router.get('/usuarios', verificarToken,(req , res)=>{
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('SELECT u.id_usuario, u.apellido, u.nombre, u.user, u.correo, r.nombre rol, u.estado FROM usuarios AS u INNER JOIN roles AS r ON r.id_rol=u.id_rol ', (error, registros)=>{
                if(error){
                    console.log('Error en la base de datos', error)
                }else{
                    res.json(registros)
                }
            })
        }
    })
});
// traer los  datos del usuarios por el ID

// metodo GET
//URL /usuarios/:id_usuario
//parametros : ninguno
router.get('/usuarios/:id_usuario', (req , res)=>{
    const { id_usuario } = req.params
    mysqlConnect.query('SELECT * FROM usuarios WHERE id_usuario=?', [id_usuario], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
////////////////////insert de usuario

// metodo POST
//URL /usuarios/
//parametros : en el cuerpo(body) 
    // nombre

router.post('/usuarios', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
  
    mysqlConnect.query('INSERT INTO usuarios (nombre) VALUES (?)', [nombre], (error, registros)=>{
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


////////////////////edicion de usuario
// metodo PUT
//URL /usuarios/:id_usuario
//parametros : 
    // en el cuerpo(body) 
    // nombre
    // y el parametro que vamos a editar ->id_usuario
router.put('/usuarios/:id_usuario', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
    const { id_usuario } = req.params
    mysqlConnect.query('UPDATE usuarios SET nombre = ?  WHERE id_usuario = ?', [nombre, id_usuario], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
        res.json({
            status:true,
            mensaje: "La edicion de registro se realizo correctamente"
            })
       }
   })
})

router.put('/resetpass/:id_usuario', bodyParser.json(), (req , res)=>{

    let newPass= bcrypt.hashSync('siliconmisiones', 10);
    const { id_usuario } = req.params
    mysqlConnect.query('UPDATE usuarios SET pass = ?  WHERE id_usuario = ?', [newPass, id_usuario], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
        res.json({
            status:true,
            mensaje: "El blanqueo de clave se realizo correctamente"
            })
       }
   })
})

///////////////////eliminacion de usuario
// metodo DELETE
//URL /usuarios/:id_usuario
//parametros : 
// y el parametro que vamos a borrar logicamente ->id_usuario
router.delete('/usuarios/:id_usuario', bodyParser.json(), (req , res)=>{
    const { actualizar }  = req.body
    const { id_usuario } = req.params
    mysqlConnect.query('UPDATE usuarios SET estado = ?  WHERE id_usuario = ?', [actualizar, id_usuario], (error, registros)=>{
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
module.exports= router;