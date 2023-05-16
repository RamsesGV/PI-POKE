const {apiPokemon} = require('./apiPokemon')
const {pokemonsDB} = require('./pokesDB')

const getPoke = async() => { 
    try {
        const APIPOKE = await apiPokemon() //hace una llamada a la API y espera a que la respuesta esté lista
        const DBPOKE = await pokemonsDB() // busca los pokemons de la base de datos y espera a que la respuesta esté lista
        const DBAPI = DBPOKE?[...APIPOKE,...DBPOKE]:apiPokemon  //Si la consulta de la base de datos no falla, se concatenan los arrays de los pokemons de la API y la base de datos. Si falla, se devuelve solo el array de la API.

        return DBAPI // devuelve el array con los pokemons
    } catch (error) {
        return ({error:error.message})// Si falla alguna de las consultas, devuelve un objeto con el mensaje de error correspondiente.
    }
}

module.exports = {
    getPoke
    
}
//!En resumen,
//! el código exporta una función llamada `getPoke` que obtiene los pokemons de la API y los de la base de datos.
//! Si ambas consultas tienen éxito, devuelve un array con todos los pokemons (los de la API y los de la base de datos),
//! concatenando los resultados de ambas consultas.
//! Si alguna de las consultas falla, devuelve un objeto con el mensaje de error correspondiente.