const mongoose = require('mongoose');

// Conectar a la base de datos MongoDB
require('dotenv').config({path:'variable.env' });


// Conexión a la base de datos
const conectarBD = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
        });
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1); // Terminar el proceso si hay un error
    }


}

module.exports = conectarBD