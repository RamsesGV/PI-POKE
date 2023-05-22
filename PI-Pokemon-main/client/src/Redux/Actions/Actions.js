import axios from 'axios'

import { 
    GET_POKEMONS,
    GET_POKE_DETAIL, 
    GET_BY_POKENAME,
    POST_NEW_POKE, 
    GET_POKE_TYPES,
    FILTER_CREATE_POKE,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    FILTER_BY_TYPE,
    CLEAR_DETAIL,
    CLEAR_HOME,
    EMPTY,
} from './Types'

export const pokeGet = () => { 
    return async function (dispatch) { 
        try {
        const pokemon = await axios
        .get('http://localhost:3001/pokemons')
        return dispatch({
            type:GET_POKEMONS,
            payload:pokemon.data,
        })    
        } catch (error) {
            return {error:error.message}
        }
        
    }
}

export const pokeDetail = (id) => { 
    return async function(dispatch) { 
        try {
            const pokeDetail = await axios
            .get(`http://localhost:3001/pokemons/${id}`)
            return dispatch({
                type:GET_POKE_DETAIL,
                payload:pokeDetail.data
            })
        } catch (error) {
            return {error:error.message}
        }
    }
}

export const getByPokeName = (name) => { 
return async function(dispatch) { 
    try {
        const getNameDetail = await axios
    .get(`http://localhost:3001/pokemons/?name=${name}`)
    return dispatch({
        type:GET_BY_POKENAME,
        payload:getNameDetail.data
    })
    } catch (error) {
        return {error:error.message}
    }
    
}
}

export const createPoke = (pokemon) => { 
    return async function(dispatch) { 
        try {
            let payload = await axios
            .post('http://localhost:3001/pokemons', pokemon)
            return dispatch({
                type:POST_NEW_POKE,
                payload,
            })
        } catch (error) {
            return{error:error.message}
        }
    }
}

export const getPokeTypes = () => { 
    return async function(dispatch) { 
        try {
            const types = await axios
            .get('http://localhost:3001/types')
            return dispatch({
                type:GET_POKE_TYPES,
                payload:types.data,
            })
        } catch (error) {
            return{error:error.message}
        }
    }
}

export const filterByCreated = ( payload) => { 
    return { 
        type:FILTER_CREATE_POKE,
        payload,
    }
}

export const orderByName = (payload) => {
    return {
    type: ORDER_BY_NAME,
    payload
    }
}

export const orderByAttack = (payload) => {
    return {
    type: ORDER_BY_ATTACK,
    payload
    }
}
export const filterByType = (payload)=>{
    return{
    type:FILTER_BY_TYPE,
    payload
    }
}
export const clearDetail = () => {
    return {
    type: CLEAR_DETAIL,
    };
};
export const clearHome = () => {
    return {
    type : CLEAR_HOME,
    }
}
export const empty = ()=>{
    return{
    type : EMPTY
    }
}