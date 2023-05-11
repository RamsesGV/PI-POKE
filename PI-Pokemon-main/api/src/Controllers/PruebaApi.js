//!ESTO SOLO ES UNA PRUBEA PARA HACER SOLICITUDES A LA API, NO AFECTA A LA WEB NI A SU FUNCIONALIDAD.


const { apiPokemon } = require('./apiPokemon')

async function testApi() { 
    const pokemons = await apiPokemon()
    console.log(pokemons)
}

testApi()