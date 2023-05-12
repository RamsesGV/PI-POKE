const {Pokemons, Types } = require('../db')

const newPokemon = async (params) => { 
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
    createdPokemon.addType(params.types)
}
module.exports = { 
    newPokemon
}