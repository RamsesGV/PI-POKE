const {Pokemons, Types } = require('../db')

const newPokemon = async (params) => { 
try {
    
    const createdPokemon = await Pokemons.create({
        Nombre:params.name, 
        Imagen:params.image,
        Vida:params.health,
        Ataque:params.attack,
        Defensa:params.defense,
        Velocidad:params.speed,
        Altura:params.height,
        Peso:params.weight

    })
    const types = await Types.findAll({
        where: {
          name: params.types // Aquí asumimos que params.types contiene el nombre del tipo de Pokémon
        }
    });

    if (types.length > 0) {
        await createdPokemon.addTypes(types);
    } else {
        // Si no se encuentra ningún tipo de Pokémon correspondiente, puedes manejarlo como desees
        console.log('No se encontraron tipos de Pokémon correspondientes');
    }
    } catch (error) {
    return { error: error.message };
    }
}

module.exports = { 
    newPokemon
};