const {Pokemons,Types} = require('../db') //En esta línea se importan los modelos Pokemons y Types desde la base de datos que has definido en otro archivo.
const { apiPokemon } = require('./apiPokemon')//Aquí se importa la función apiPokemon desde el archivo apiPokemon.js que contiene la lógica para hacer llamadas a la API de Pokemon.

const getPokeDetail = async(id) => { 
    try {
        /*
        Se busca un registro en la tabla Pokemons de la base de datos que tenga el id recibido como parámetro.
        Al utilizar el método findByPk se espera obtener un solo resultado.
        Además, se utiliza el parámetro include para incluir los datos del tipo de pokemon al que está asociado.
        Al especificar el modelo Types se realiza una relación interna entre las dos tablas y se recuperan los datos necesarios.
         */
        let pokemon = await Pokemons.findByPk(id,{//Se define una función asincrónica llamada getPokeDetail que acepta un parámetro id.
            include: { 
                model:Types,
            }
        })
        /*
            Si no se encuentra un registro en la base de datos con el id recibido,
            se llama a la función apiPokemon para buscar el detalle del pokemon en la API.
            En este caso, la función apiPokemon devuelve un objeto con la información del pokemon, por lo que se guarda directamente en la variable pokemon.
         */
        if(!pokemon) { 
            const pokemonApi = await apiPokemon(id)
            pokemon = pokemonApi

            /*
            Finalmente, se devuelve el objeto pokemon con la información del pokemon y sus datos de tipo asociados si se encuentra en la base de datos, o si no se encuentra, se devuelve el objeto con la información del pokemon obtenida de la API.
            Si se produce un error durante la ejecución, se devuelve un objeto con un mensaje de error.
             */
        } 
        return pokemon
    } catch (error) {
        return { error: error.message }
    }
}

module.exports = { 
    getPokeDetail //Se exporta la función getPokeDetail para que pueda ser utilizada en otros archivos.
}
