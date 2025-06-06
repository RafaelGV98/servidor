const Producto = require('../models/producto');

exports.crearProducto = async (req, res) => {
    try {
        let producto;
        // Crear un nuevo producto
        producto = new Producto(req.body);
        await producto.save();
        res.status(201).send(producto);
        console.log('Producto creado:', producto);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).send({ mensaje: 'Error al crear el producto' });
    }
};

exports.obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).send({ mensaje: 'Error al obtener los productos' });
    }
};

exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).send({ mensaje: 'Error al obtener el producto' });
    }
};

exports.actualizarProducto = async (req, res) => {
    try {
        const {nombre, ubicacion, categoria, precio} = req.body;

        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        // Actualizar los campos del producto
        producto.nombre = nombre;
        producto.ubicacion = ubicacion; 
        producto.categoria = categoria;
        producto.precio = precio;

        producto = await Producto.findOneAndUpdate(
            { _id: req.params.id }, 
            producto, 
            { new: true }
        );
        res.json(producto);
    } catch (error) {
        console.error('Error al actualizar el producto:', error);
        res.status(500).send({ mensaje: 'Error al actualizar el producto' });
    }
};

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }

        // Eliminar el producto
        await Producto.findOneAndDelete({ _id: req.params.id });
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).send({ mensaje: 'Error al eliminar el producto' });
    }
};


