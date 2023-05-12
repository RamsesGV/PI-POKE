const axios = require('axios'); //Se importa el módulo axios que permite hacer solicitudes HTTP desde Node.js.

const apiPokemon = async () => { //Se define una función asincrónica llamada apiPokemon que no recibe parámetros.
    try {
        const pokemons = await axios 
        .get('https://pokeapi.co/api/v2/pokemon?limit=100') //Se inicia un bloque de código try y se hace una solicitud HTTP GET a la PokeAPI a través de axios para obtener los datos de los primeros 50 pokémon disponibles.
        const secondUrlMap = await  pokemons.data.results.map(  pokemon  => {  // accedemos a la segunda propiedad del objeto data.results.url para acceder a los detalles del pokemon
            return pokemon.url
        })
        const pokemonArr = await Promise.all(secondUrlMap.map(async(url) => { //promise.all sirve para realizar varias solicitudes a la api de manera simultanea
            const urlResponse = await axios(url)                              //mapeamos a la propiedad url para guardarla en una constante la cual hace la solicitud a la api DENTRO de la URL
                                                                              //Se espera la respuesta de la solicitud anterior y se mapea sobre los resultados para obtener la URL de cada uno de los pokémon.
        /* 
            Se utiliza Promise.all() para hacer solicitudes HTTP simultáneas a la API utilizando las URLs de los pokémon obtenidas anteriormente.
            Luego, se mapea sobre las respuestas para extraer los datos relevantes de cada uno de los pokémon (id, nombre, altura, peso, stats de HP, ataque y velocidad, tipos y URL de la imagen).
        */                                                                
            return{
                id:urlResponse.data.id,
                name:urlResponse.data.name,
                height:urlResponse.data.height,
                weight:urlResponse.data.weight,
                hp:urlResponse.data.stats.find(({stat}) => stat.name === 'hp')?.base_stat, //haces destructurin al objeto stat y accedemos directamente a su propiedad name. 
                attack:urlResponse.data.stats.find(({stat}) => stat.name === 'attack')?.base_stat,//igual que hp
                speed:urlResponse.data.stats.find(({stat}) => stat.name === 'speed')?.base_stat,//igual que hp
                types:urlResponse.data.types.map((type) => type.type.name),/*La línea de código types:urlResponse.data.types.map((type) => type.type.name) accede a la propiedad types de la respuesta de la API PokeAPI y usa el método map para transformar los objetos de tipo de cada Pokémon en un arreglo de nombres de tipos. Luego, este arreglo se guarda en la propiedad types de cada objeto de Pokémon en el arreglo final.*/
                img:urlResponse.data.sprites.other['official-artwork'].front_default,
                /*La razón por la que utiliza la sintaxis con corchetes cuadrados en lugar de la notación de puntos se debe a que "official-artwork" es una propiedad del objeto "other" que contiene un guión en su nombre.
                En JavaScript, si una propiedad de un objeto contiene un guión u otro carácter especial,
                no es posible acceder a ella utilizando la notación de punto.
                Por lo tanto, la sintaxis con corchetes se utiliza para acceder a esa propiedad específica del objeto "other".
                De lo contrario, el código produciría un error sintáctico. */
            }
        }))
        return pokemonArr //La función retorna un arreglo con objetos que representan cada uno de los pokémon obtenidos con los datos solicitados.

    } catch (error) {
        return ({error:error.message}) //Si ocurre algún error en el bloque de código try, se captura y se retorna un objeto con un mensaje de error.
    }
}

module.exports =  {
    apiPokemon, //Se exporta la función apiPokemon para poder ser utilizada en otros módulos de Node.js.
}