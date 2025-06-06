//rutas para producto

const express = require('express');
const router = express.Router();
const productocontroller = require('../controllers/productocontroller');


//api/producto
router.post('/', productocontroller.crearProducto); //ruta para crear un producto
router.get('/', productocontroller.obtenerProductos);// ruta para obtener todos los productos
router.put('/:id', productocontroller.actualizarProducto); //ruta para actualizar un producto
router.get('/:id', productocontroller.obtenerProductos); //ruta para obtener un producto por id
router.delete('/:id', productocontroller.eliminarProducto); //ruta para eliminar un producto



module.exports = router;