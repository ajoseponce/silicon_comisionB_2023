const express = require('express');

const mysqlConnect = require('../database/bd')
const bodyParser = require('body-parser');

const router = express()
// listar modelos
router.get('/modelos', (req , res)=>{
    mysqlConnect.query('SELECT m.id_modelo, m.nombre, f.nombre AS fabricante FROM modelos AS m INNER JOIN fabricantes AS f ON f.id_fabricante=m.id_fabricante', (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})

// traer los  datos del modelo por ID
router.get('/modelos/:id_modelo', (req , res)=>{
    const { id_modelo } = req.params
    mysqlConnect.query('SELECT * FROM modelos WHERE id_modelo=?', [id_modelo], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
////////////////////insert de modulo
router.post('/modelos', bodyParser.json(), (req , res)=>{
     const { nombre, id_fabricante }  = req.body
   
     mysqlConnect.query('INSERT INTO modelos (nombre, id_fabricante) VALUES (?, ?)', [nombre, id_fabricante], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.send('El insert se realizo correctamente')
        }
    })
})
// /////////////////////////////

////////////////////edicion de modulo
router.put('/modelos/:id_modelo', bodyParser.json(), (req , res)=>{
    const { nombre, id_fabricante }  = req.body
    const { id_modelo } = req.params
    mysqlConnect.query('UPDATE modelos SET nombre = ?, id_fabricante = ? WHERE id_modelo = ?', [nombre, id_fabricante, id_modelo], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
           res.send('La edicion de registro ' +id_modelo+ ' se realizo correctamente')
       }
   })
})
// /////////////////////////////
////////////////////eliminar un  modulo
router.delete('/modelos/:id_modelo', bodyParser.json(), (req , res)=>{
    const { id_modelo } = req.params
    mysqlConnect.query('DELETE FROM modelos WHERE id_modelo = ?', [id_modelo], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
           res.send('La eliminacion del registro ' +id_modelo+ ' se realizo correctamente')
       }
   })
})
// /////////////////////////////

// listar fabricantes
// metodo GET
//URL /fabricantes
//parametros : ninguno
router.get('/fabricantes', (req , res)=>{
    mysqlConnect.query('SELECT * FROM fabricantes ', (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
// traer los  datos del fabricantes por el ID

// metodo GET
//URL /fabricantes/:id_fabricante
//parametros : ninguno
router.get('/fabricantes/:id_fabricante', (req , res)=>{
    const { id_fabricante } = req.params
    mysqlConnect.query('SELECT * FROM fabricantes WHERE id_fabricante=?', [id_fabricante], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
////////////////////insert de fabricante

// metodo POST
//URL /fabricantes/
//parametros : en el cuerpo(body) 
    // nombre

router.post('/fabricantes', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
  
    mysqlConnect.query('INSERT INTO fabricantes (nombre) VALUES (?)', [nombre], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
           res.send('El insert se realizo correctamente')
       }
   })
})


////////////////////edicion de fabricante
// metodo PUT
//URL /fabricantes/:id_fabricante
//parametros : 
    // en el cuerpo(body) 
    // nombre
    // y el parametro que vamos a editar ->id_fabricante
router.put('/fabricantes/:id_fabricante', bodyParser.json(), (req , res)=>{
    const { nombre }  = req.body
    const { id_fabricante } = req.params
    mysqlConnect.query('UPDATE fabricantes SET nombre = ?  WHERE id_fabricante = ?', [nombre, id_fabricante], (error, registros)=>{
       if(error){
           console.log('Error en la base de datos', error)
       }else{
           res.send('La edicion de registro ' +id_fabricante+ ' se realizo correctamente')
       }
   })
})

///////////////////eliminacion de fabricante
// metodo DELETE
//URL /fabricantes/:id_fabricante
//parametros : 
// y el parametro que vamos a borrar logicamente ->id_fabricante
router.delete('/fabricantes/:id_fabricante', bodyParser.json(), (req , res)=>{

    const { id_fabricante } = req.params
    mysqlConnect.query('UPDATE fabricantes SET estado = "B"  WHERE id_fabricante = ?', [id_fabricante], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.send('El registro ' +id_fabricante+ ' se dio de baja correctamente')
        }
    })
})

//////////////////////////////
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
           res.send('El insert se realizo correctamente')
       }
   })
})


////////////////////edicion de tipos de equipo
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
           res.send('La edicion de registro ' +id_ubicacion+ ' se realizo correctamente')
       }
   })
})

///////////////////eliminacion de tipos de equipo
// metodo DELETE
//URL /ubicaciones/:id_ubicacion
//parametros : 
    // y el parametro que vamos a borrar logicamente ->id_ubicacion
router.delete('/ubicaciones/:id_ubicacion', bodyParser.json(), (req , res)=>{
    const { id_ubicacion } = req.params
    mysqlConnect.query('UPDATE ubicaciones SET estado = "B"  WHERE id_ubicacion = ?', [id_ubicacion], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.send('El registro ' +id_ubicacion+ ' se dio de baja correctamente')
        }
    })
})

module.exports= router;