const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');

const bcrypt= require('bcrypt');

const jwt= require('jsonwebtoken');

const router = express()

// listar modelos
router.get('/', (req , res)=>{
    res.send('El sistema esta funcionando')
})

// registro de usuarios
router.post('/registro', bodyParser.json() , (req , res)=>{
    const {apellido, nombre , dni, user, pass, correo, id_rol} =req.body;
    //
    //console.log(req.body)
    let hash= bcrypt.hashSync(pass, 10);
    //
    if(!dni){
        res.json({
            status:false,
            mensaje: "El DNI es un campo obligatorio"
        })
    }
    //  return

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
router.get('/menu/:id_rol',verificarToken, (req , res)=>{
    const { id_rol } = req.params;
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('SELECT * FROM menu WHERE id_rol=?', [id_rol], (error, registros)=>{
                if(error){
                    console.log('Error en la base de datos', error)
                }else{
                    res.json({
                        status:true,
                        menu:registros 
                    })
                }
            })
        }
    })
})

router.post('/menu_permisos/',verificarToken, bodyParser.json() , (req , res)=>{
    const { id_rol, menu } = req.body;
   
    jwt.verify(req.token, 'siliconKey', (error, valido)=>{
        if(error){
            res.sendStatus(403);
        }else{
            mysqlConnect.query('SELECT * FROM menu WHERE id_rol=? AND href=?', [id_rol, menu], (error, registros)=>{
                if(error){
                    console.log('Error en la base de datos', error)
                }else{
                    if(registros.length>0){
                        res.json({
                            status:true
                        })
                    }else{
                        res.json({
                            status:false
                        })
                    }
                    
                }
            })
        }
    })
})


router.post('/login', bodyParser.json() , (req , res)=>{
    const {user, pass} =req.body
    if(!user){
        res.json({
            status:false,
            mensaje:"El usuario es un dato obligatorio para el login" 
        })
         return; 
    }
    if(!pass){
        res.json({
            status:false,
            mensaje:"El password es un dato obligatorio para el login" 
        }) 
        return;
    }
    mysqlConnect.query('SELECT * FROM usuarios WHERE user=?', [user], (error, usuario)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            if(usuario.length>0){
                console.log('estado de la comparacion', usuario[0].pass)
                 const comparacion= bcrypt.compareSync(pass, usuario[0].pass)   
                 console.log('estado de la comparacion', comparacion)
                 if(comparacion)  {

                    // vamos a generar el token
                    jwt.sign({usuario}, 'siliconKey', (error, token)=>{

                        res.json({
                            status: true,
                            datos: usuario,
                            token: token
                        }) 
                    })

                    
                 }else{
                    res.json({
                        status:false,
                        mensaje:"La contraseña es incorrecta" 
                    }) 
                 }
            }else{
                res.json({
                    status:false,
                    mensaje:"El usuario NO EXISTE" 
                }) 
            }
        }
    })
    

})
router.post('/validarnick', bodyParser.json() , (req , res)=>{
    const { user } = req.body;
    console.log(user)
            mysqlConnect.query('SELECT * FROM usuarios WHERE user=?', [user], (error, registros)=>{
                if(error){
                    console.log('Error en la base de datos', error)
                }else{

                    if(registros.length>0){
                        res.json({
                            status:true,
                            mensaje:"El nombre de usuario ya existe" 
                        })
                    }else{
                        res.json({
                            status:false,
                           
                        })
                    }
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
module.exports= router;