const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');

const bcrypt= require('bcrypt');

const router = express()

// listar modelos
router.get('/', (req , res)=>{
    res.send('El sistema esta funcionando')
})

// registro de usuarios
router.post('/registro', bodyParser.json() , (req , res)=>{
    const {apellido, nombre , dni, user, pass, correo, id_rol} =req.body;
    let hash= bcrypt.hashSync(pass, 5);
    //
    if(!dni){
        res.json({
            status:false,
            mensaje: "El DNI es un campo obligatorio"
        })
    }
    mysqlConnect.query('SELECT * FROM usuarios WHERE user=?', [user], (error, usuarios)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            if(usuarios.length>0){
                // no puede grabar 
                res.json({
                    status:false,
                    mensaje:"El nombre de usuario ya existe" 
                })
            }else{
                mysqlConnect.query('INSERT INTO usuarios (apellido, nombre, dni, user, pass, correo, id_rol ) VALUES (?,?,?,?,?,?,?)', [apellido, nombre, dni, user, hash, correo, id_rol ], (error, registros)=>{
                    if(error){
                        console.log('Error en la base de datos al momento de insertar ----> ', error)
                    }else{
                    res.json({
                        status:true,
                        mensaje: "El registro se grabo correctamente"
                    })
                    }
                })
            }
        }
    })
})


module.exports= router;