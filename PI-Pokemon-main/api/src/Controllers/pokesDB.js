const { Pokemons, Types} = require('../db') //Aquí se importan los modelos Pokemons y Types de la base de datos.

const pokemonsDB = async () => { //Se define la función pokemonsDB como una función asíncrona.
    try {
        const pokemonsInsideDb = await Pokemons.findAll({
            include:Types //Se utiliza el método findAll de Sequelize para encontrar todos los registros de Pokemons en la base de datos, y se incluyen los tipos asociados a cada Pokémon utilizando la opción include y el modelo Types.
        })
        /* 
        Se devuelve un array con todos los Pokémon encontrados en la base de datos,
        con la información de cada uno de ellos,
        como el ID, el nombre, la imagen, la vida, el ataque, la defensa, la velocidad, la altura y el peso.
        */ 
        return pokemonsInsideDb.map((pokemon) => { 
            return{ 
                ID:pokemon.ID,
                Nombre:pokemon.Nombre,
                Imagen:pokemon.Imagen,
                Vida:pokemon.Vida,
                Ataque:pokemon.Ataque,
                Defensa:pokemon.Defensa,
                Velocidad:pokemon.Velocidad,
                Altura:pokemon.Altura,
                Peso:pokemon.Peso,
                Types:pokemon.types.map((type) => type.name),
                CreatedInDB:pokemon.CreatedInDB



            }
        })
    } catch (error) {
        return ({ error:error.message }) //Si hay algún error en la consulta, se captura y se devuelve un objeto con la propiedad error y su valor asociado es el mensaje de error.
        
    }
}

module.exports = {
    pokemonsDB //Se exporta la función pokemonsDB para que pueda ser utilizada en otros archivos.
}