const axios = require('axios');

const apiPokemon = async () => { 
    try {
        const pokemons = await axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=50')
        
        
    } catch (error) {
        
    }
}