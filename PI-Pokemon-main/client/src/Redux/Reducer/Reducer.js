import {
    GET_POKEMONS,
    GET_POKE_DETAIL,
    GET_BY_POKENAME,
    POST_NEW_POKE ,
    GET_POKE_TYPES,
    FILTER_CREATE_POKE,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    FILTER_BY_TYPE,
    CLEAR_HOME,
    CLEAR_DETAIL,
    EMPTY,
} from '../Actions/Types.js'

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
    case GET_POKEMONS:
        return{ 
            ...state,
            allPokemons:action.payload,
            pokemons: action.payload
        }
        case GET_POKE_DETAIL:
            return{ 
                ...state,
                pokeDetail:action.payload,

            }

            case CLEAR_DETAIL:
                return { 
                    ...state,
                    pokeDetail:{},
                }

                case GET_POKE_TYPES: 
                    return{ 
                    ...state,
                    pokeTypes:action.payload,

                }

                case GET_BY_POKENAME:
                    return{ 
                        ...state,
                        pokemons:action.payload,
                    }

                    case FILTER_BY_TYPE: 
                        if(action.payload === "all") { 
                            return {
                                ...state,
                                pokemons:state.allPokemons,
                            }
                            }
                            const typeSelect = state.allPokemons?.filter((poke) => { 
                                if(!poke.createdInDb) { 
                                    if(poke.types[0] === action.payload || poke.types[1] === action.payload){
                                        return true
                                        }else return false

                                        } else {
                                    const acum = poke.pokeTypes?.filter((type) => type.name === action.payload)
                                    if(acum.length > 0) { 
                                        return true
                                    } else { 
                                        return false
                                    }
                                }
                            })
                                const results = typeSelect.filter((pokemon) => state.allPokemons.includes(pokemon))
                                return { 
                                    ...state,
                                    pokemons:results,

                                }
                case ORDER_BY_NAME: 
                    if(action.payload === 'asc') { 
                        let poke = state.pokemons?.slice();
                        let order = poke.sort((a,b)=> { 
                            if(a.name > b.name) { 
                                return 1
                            }
                            if(b.name > a.name) { 
                                return -1
                            }
                            return 0
                        })
                        if(state.pokeFilter.length > 0) { 
                            return{...state, pokeFilter:order}
                        }
                        return { 
                            ...state,
                            pokemons:order,
                        }
                    }
                        break;
                case ORDER_BY_ATTACK:
                    if(action.payload === 'asc') {
                        let poke = state.pokemons?.slice();
                        let order = poke.sort(function(a,b){
                            if(a.attack > b.attack) { 
                                return 1
                            }
                            if(b.attack > a.attack) { 
                                return -1
                            }
                            return 0
                        })
                        if(state.pokeFilter.length > 0) { 
                            return{...state, pokeFilter:order}
                        }
                        return { 
                            ...state,
                            pokemons:order
                        }
                    }

                    if (action.payload === "des") {
                        let poke = state.pokemons?.slice();
                        let order = poke.sort(function (a, b) {
                        if (b.attack > a.attack) {
                            return 1;
                        }
                        if (a.attack > b.attack) {
                            return -1;
                        }
                        return 0;
                        });
                
                        if (state.pokeFilter.length > 0) {
                        return { ...state, pokeFilter: order };
                        }
                        return {
                        ...state,
                        pokemons: order,
                        };
                    }
                    break;

                case FILTER_CREATE_POKE: 
                    if(action.payload === 'all')
                    return{ 
                        ...state,
                        pokemons:state.allPokemons
                    }

                    if(action.payload === 'created') { 
                        const createdPokemons = state.allPokemons?.filter((poke) => typeof poke.id === "string");
                        return { 
                            ...state,
                            pokemons:createdPokemons
                        }
                    }
                    if(action.payload === 'api') { 
                        const allApiPokemons = state.allPokemons?.filter((poke) => typeof poke.id === "number" );
                        return{ 
                            ...state,
                            pokemons:allApiPokemons
                        }
                    }
                    break;
                
                case CLEAR_HOME: 
                return { 
                    ...state,
                    pokemons:state.allPokemons,
                    pokeFilter:[],
                }

                case EMPTY: 
                return {
                    ...state,
                    allPokemons: [],
                    pokeFilter: [],
                    pokeDetail: {},
                    error: false,
                }

                case POST_NEW_POKE:
                return {
                    ...state,
                    allPokemons: [...state.allPokemons, action.payload],
                    pokemons: [...state.pokemons, action.payload]
};

                    
                

    default: 
        return{ ...state}
    

                        }
                    }

export default rootReducer