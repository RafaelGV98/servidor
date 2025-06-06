const express = require('express');
const conectarDB = require('./config/conexion');
const cors = require('cors');

//crear el servidor
const app = express();


//conectar a la base de datos
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));



//configurar el puerto
app.listen(4000, () => {
    console.log('Servidor  esta corriendo en el puerto 4000');
});