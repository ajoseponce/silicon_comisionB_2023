const express = require('express');
const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');
const router = express()
//////////////////////////////
//////////////////////////////
// listar de equipos
// metodo GET
//URL /equipos
//parametros : ninguno
router.get('/equipos', (req , res)=>{
    mysqlConnect.query("SELECT e.id_equipo, e.nombre,te.nombre tipo_equipo ,concat_ws(' - ', m.nombre, f.nombre) modelo_fabricante, u.nombre lugar_ubicacion, e.serial, e.estado    FROM equipos AS e    INNER JOIN tipos_equipo AS te ON te.id_tipo_equipo=e.id_tipo_equipo  LEFT JOIN modelos AS m ON m.id_modelo=e.id_modelo LEFT JOIN ubicaciones AS u ON u.id_ubicacion=e.id_ubicacion LEFT JOIN fabricantes AS f ON f.id_fabricante = m.id_fabricante ", (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})


router.put('/cambiar_estado_equipos/:id_equipo', bodyParser.json(), (req , res)=>{
    const { actualizar }  = req.body
    const { id_equipo } = req.params
    mysqlConnect.query('UPDATE equipos SET estado = ?  WHERE id_equipo = ?', [actualizar, id_equipo], (error, registros)=>{
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
// listar de equipos con filtros
// metodo POST
//URL /equipos_filtrado
//parametros : 
    // filtros: id_modelo, nombre_equipo, id_ubicacion, id_tipo_equipo, serial
router.post('/equipos_filtrado', bodyParser.json(),  (req , res)=>{
    const { id_modelo, nombre_equipo, id_ubicacion, id_tipo_equipo, serial } = req.body
    // console.log(id_modelo)
    let my_query ="SELECT e.id_equipo, e.id_modelo ,e.nombre, te.nombre tipo_equipo ,concat_ws(' - ', m.nombre, f.nombre) modelo_fabricante, u.nombre lugar_ubicacion, e.serial, e.estado    FROM equipos AS e    INNER JOIN tipos_equipo AS te ON te.id_tipo_equipo=e.id_tipo_equipo  LEFT JOIN modelos AS m ON m.id_modelo=e.id_modelo LEFT JOIN ubicaciones AS u ON u.id_ubicacion=e.id_ubicacion LEFT JOIN fabricantes AS f ON f.id_fabricante = m.id_fabricante WHERE 1 ";
    
    if(id_modelo){
        my_query = my_query + ` AND e.id_modelo='${id_modelo}'`;
    }
    if(id_ubicacion){
        my_query = my_query + ` AND e.id_ubicacion='${id_ubicacion}'`;
    }
    if(nombre_equipo){
        my_query = my_query + ` AND e.nombre like '%${nombre_equipo}%'`;
    }
    if(id_tipo_equipo){
        my_query = my_query + ` AND e.id_tipo_equipo='${id_tipo_equipo}'`;
    }
    if(serial){
        my_query = my_query + ` AND e.serial like '%${serial}%'`;
    }

    mysqlConnect.query(my_query, (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
////////////////////insert de equipos

// metodo POST
//URL /equipos/
//parametros : en el cuerpo(body) 
    // nombre, id_modelo, id_tipo_equipo, id_ubicacion, serial

router.post('/equipos', bodyParser.json(), (req , res)=>{
    const { nombre_equipo, id_modelo, id_tipo_equipo, id_ubicacion, serial }  = req.body
    if(!nombre_equipo){
        res.json({
            status:false,
            mensaje: "El nombre del equipo es un campo obligatorio"
        })
    }
    if(!id_modelo){
        res.json({
            status:false,
            mensaje: "El modelo del equipo es un campo obligatorio"
        })
    }
    if(!id_tipo_equipo){
        res.json({
            status:false,
            mensaje: "El tipo de equipo es un campo obligatorio"
        })
    }
    if(!id_ubicacion){
        res.json({
            status:false,
            mensaje: "La ubicacion del equipo es un campo obligatorio"
        })
    }
    mysqlConnect.query('INSERT INTO equipos (nombre, id_modelo, id_tipo_equipo, id_ubicacion, serial ) VALUES (?,?,?,?,?)', [nombre_equipo, id_modelo, id_tipo_equipo, id_ubicacion, serial ], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
        res.json({
            status:true,
            mensaje: "El registro se grabo correctamente"
        })
        }
    })
})
// traer los  datos del equipo por el ID

// metodo GET
//URL /equipos/:id_equipo
//parametros : id_equipo
router.get('/equipos/:id_equipo', (req , res)=>{
    
    const { id_equipo } = req.params
    console.log('entra aqui', id_equipo)
    mysqlConnect.query('SELECT * FROM equipos WHERE id_equipo=?', [id_equipo], (error, registros)=>{
        if(error){
            res.json({
                status:false
            })
        }else{
            if(registros.length>0){
                res.json(registros)
            }else{
                res.json({
                    status:false,
                    mensaje:"El ID del equipo no existe" 
                });
            }
            
        }
    })
})
// metodo UPDATE
//URL /equipos/
//parametros : 
    // y el parametro que vamos a borrar logicamente ->id_equipo
    router.put('/equipos/:id_equipo', bodyParser.json(), (req , res)=>{
        const { id_equipo } = req.params
        const { id_modelo, nombre_equipo, id_ubicacion, id_tipo_equipo, serial } = req.body
        console.log("esto es el body",req.body)
        if(!nombre_equipo){
            res.json({
                status:false,
                mensaje: "El nombre del equipo es un campo obligatorio"
            })
        }
        if(!id_modelo){
            res.json({
                status:false,
                mensaje: "El modelo del equipo es un campo obligatorio"
            })
        }
        if(!id_tipo_equipo){
            res.json({
                status:false,
                mensaje: "El tipo de equipo es un campo obligatorio"
            })
        }
        if(!id_ubicacion){
            res.json({
                status:false,
                mensaje: "La ubicacion del equipo es un campo obligatorio"
            })
        }
        mysqlConnect.query('SELECT * FROM equipos WHERE id_equipo=?', [id_equipo], (error, registros)=>{
            if(error){
                console.log('Error en la base de datos', error)
            }else{

                if(registros.length>0){
                    mysqlConnect.query('UPDATE equipos SET nombre=?, id_modelo=?, id_tipo_equipo=?, id_ubicacion=?, serial=?  WHERE id_equipo = ?', [nombre_equipo, id_modelo, id_tipo_equipo, id_ubicacion, serial ,id_equipo], (error, registros)=>{
                        if(error){
                            console.log('Error en la base de datos', error)
                        }else{
                            res.json({
                                status:true,
                                mensaje:"El registro " +id_equipo+ " se edito correctamente" 
                            })
                        }
                    })
                }else{
                    res.json({
                        status:false,
                        mensaje:"El ID del equipo no existe" 
                    })
                }
                
            }
        })  
    })
// metodo DELETE
//URL /equipos/:id_equipo
//parametros : 
    // y el parametro que vamos a borrar logicamente ->id_equipo
router.delete('/equipos/:id_equipo', bodyParser.json(), (req , res)=>{
    const { id_equipo } = req.params
    mysqlConnect.query('SELECT * FROM equipos WHERE id_equipo=?', [id_equipo], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            if(registros.length>0){
                mysqlConnect.query('UPDATE equipos SET estado = "B"  WHERE id_equipo = ?', [id_equipo], (error, registros)=>{
                    if(error){
                        console.log('Error en la base de datos', error)
                    }else{
                        res.json({
                            status:true,
                            mensaje:"El registro " +id_equipo+ " se dio de baja correctamente" 
                        })
                    }
                })
            }else{
                res.json({
                    status:false,
                    mensaje:"El ID del equipo no existe" 
                })
            }
            
        }
    })  
})
module.exports= router;