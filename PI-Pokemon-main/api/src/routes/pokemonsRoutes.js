const { Router } = require('express');
const { getPoke } = require('../Controllers/GetAllPokemons')
const { newPokemon } = require('../Controllers/CreatePokemon')
const router = Router();


router.get('/' , async (req,res) => {
    try {
        const { name } = req.query
        const listPoke = await getPoke()
        if(name) { 
            const selectPoke = await listPoke.filter((poke) => poke.name === name.toLowerCase())
            if(selectPoke.length > 0) {
                res.status(200).json(selectPoke)
            }else { 
                res.status(400).send(`The Pokémon escaped or doesn't exist!`)
            }
        }else {
            res.json(listPoke)
            
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

router.get('/:id', async (req,res) => { 
    try {
        const { id } = req.params
        const listPoke = await getPoke()
        if(id) { 
            const selectedPoke = await listPoke.filter((poke) => poke.id == id)
            if(selectedPoke.length > 0) { 
                res.status(200).json(selectedPoke)
            } else { 
                res.status(404).send('ID not found.')
            }
        }
    } catch (error) {
        res.status(400).json({error:error.message})
        
    }

})


router.post('/', async(req,res) => { 
    try {
        await newPokemon(req.body)
        res.json('Your pokemon has been created successfully')
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports =  router