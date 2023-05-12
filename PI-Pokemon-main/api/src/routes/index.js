const { Router } = require('express');
const pokemonsRoutes = require('./pokemonsRoutes')
const typesRoutes = require('./typesRoutes')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRoutes)
router.use('/types', typesRoutes)

module.exports = router;
