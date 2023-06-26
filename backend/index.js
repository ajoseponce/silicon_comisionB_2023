const express=require('express');
const app = express();

const morgan = require ('morgan')
app.set('puerto' , 2023);
app.use(morgan('dev'))

app.listen(app.get('puerto'), ()=>{
    console.log('El serv del profe esta corriendo en el puerto', app.get('puerto'))
})

