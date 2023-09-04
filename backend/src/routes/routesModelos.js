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
            res.json({
                status:false,
                mensaje: error
                })
        }else{
            res.json({
                status:true,
                mensaje: "El insert se realizo correctamente"
                })
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
           
            res.json({
            status:false,
            mensaje: error
        })
       }else{
         res.json({
            status:true,
            mensaje: 'La eliminacion del registro ' +id_modelo+ ' se realizo correctamente'
        })
          
       }
   })
})
//////////////////////////////
module.exports= router;