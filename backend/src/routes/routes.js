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

///////////////////edicion de fabricante
// metodo PUT
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
    

module.exports= router;