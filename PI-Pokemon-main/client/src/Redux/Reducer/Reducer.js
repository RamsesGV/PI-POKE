const initialState = {
    allPokemons: [],
    pokemons: [],
    pokeFilter: [],
    pokeDetail: {},
    pokeTypes: [],
    error: false,
};

const rootReducer = (state = initialState, action) =>  { 
switch(action.type) { 


    default: 
        return{ ...state}
    
}
}

export default rootReducer