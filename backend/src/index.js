const express=require('express');
const app = express();

const morgan = require ('morgan')
app.set('puerto' , 2023);
app.use(morgan('dev'))

app.use(require('./routes/routes'))

app.listen(app.get('puerto'), ()=>{
    console.log('El servidor del profe esta corriendo en el puerto', app.get('puerto'))
})

