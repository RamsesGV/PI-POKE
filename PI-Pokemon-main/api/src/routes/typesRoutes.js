const { Router } = require('express'); // Importamos la clase Router de express
const {Types} = require('../db')// Importamos el modelo de Types desde nuestro archivo de configuración de Sequelize, que en este caso es ../db.
const {getAllTypes} = require('../Controllers/GetAllTypes') // Importamos la función getAllTypes desde el controlador GetAllTypes.js
const router = Router();  // Creamos una instancia de Router

router.get('/', async (req,res) => {  // Manejador de ruta para el endpoint '/'
    try {
        await getAllTypes() // Obtenemos todos los tipos de Pokémon de la API y los guardamos en la base de datos
        const types = await Types.findAll()  // Obtenemos todos los tipos de Pokémon que están en la base de datos
        res.status(200).json(types) // Respondemos con un código de estado 200 y un objeto JSON que contiene los tipos de Pokémon obtenidos
    } catch (error) {
        res.status(400).send({error:error.message}) // Si se produce un error, respondemos con un código de estado 400 y un objeto JSON que contiene un mensaje de error detallado
    }
})

module.exports = router
