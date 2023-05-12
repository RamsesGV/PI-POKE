const { Types } = require('../db') // importamos el modelo de Types desde nuestro archivo de configuración de Sequelize, que en este caso es ../db.
const axios = require('axios') // importamos la biblioteca axios que nos permite hacer solicitudes HTTP.

const getAllTypes = async () => { //  definimos una función getAllTypes asíncrona que buscará todos los tipos de Pokémon en la API de Pokémon y los guardará en la base de datos.
try {
    const getTypes = await axios
    .get("https://pokeapi.co/api/v2/type"); //: hacemos una solicitud HTTP a la API de Pokémon para obtener todos los tipos de Pokémon.
    const types = getTypes.data.results.map((type) => {  // extraemos el nombre de cada tipo de Pokémon y lo almacenamos en un nuevo objeto con la clave name.
    return { 
        name:type.name,
    }    
    })

    const DB =  await Promise.all(
        types.map(({ name }) => Types.findOrCreate({ where: { name } })) // : utilizamos el método findOrCreate de Sequelize para crear cada tipo de Pokémon si aún no existe en la base de datos, y lo almacenamos en un arreglo 
    );
    return DB // devolvemos el arreglo de tipos de Pokémon que hemos creado y/o encontrado en la base de datos.
} catch (error) {
    return ({error:error.message}) // si se produce un error, devolvemos un objeto con una clave error que contiene un mensaje de error detallado.
}
}

module.exports = { 
    getAllTypes
}