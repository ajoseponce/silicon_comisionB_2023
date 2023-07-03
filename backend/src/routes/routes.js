const express = require('express');

const coneccion = require('../database/bd')
const bodyParser = require('body-parser');

const router = express()
// router.use(bodyParser.json)
// router.use(
//     bodyParser.urlencoded({
//       extended: true,
//     }),
//   );
  
// router.get('/', (req , res)=>{
//     res.send('esta es la ruta de inicio')
// })
// /////////////rutas de modelos////////////////

// listar modelos
router.get('/modelos', (req , res)=>{
    coneccion.query('SELECT m.id_modelo, m.nombre, f.nombre AS fabricante FROM modelos AS m INNER JOIN fabricantes AS f ON f.id_fabricante=m.id_fabricante', (error, registros)=>{
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
    coneccion.query('SELECT * FROM modelos WHERE id_modelo=?', [id_modelo], (error, registros)=>{
        if(error){
            console.log('Error en la base de datos', error)
        }else{
            res.json(registros)
        }
    })
})
////////////////////inserte los modulos
router.post('/modelos', bodyParser.json(), (req , res)=>{
     const { nombre, id_fabricante }  = req.body
    // console.log('datos', req.body)
    // console.log(id_fabricante)
    // res.send('hola')
})

// /////////////////////////////



module.exports= router;