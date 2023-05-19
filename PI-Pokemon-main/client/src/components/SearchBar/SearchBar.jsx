import React, {useState} from 'react';
import { useSelector,useDispatch} from 'react-redux'
import {getByPokeName} from '../../Redux/Actions/Actions'
import './SearchBar.modules.css'

const SearchBar = ({setCurrentPage}) => { 
const dispatch = useDispatch()


const [input, setInput] = useState("")
const pokemons = useSelector((state) => state.pokemons)

let handlerChange = (event) => { 
    setInput(event.target.value);
}

let handleSubmit = (event) => { 

    event.preventDefault()
    dispatch(getByPokeName(input))
    setInput('')
    setCurrentPage(0)
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            className='input'
            onChange={handlerChange}
            value={input}
            placeholder='Type Here to search!'
            onClick={() => setInput('')}
            />
            <button type='submit' className='searchBTN' disabled={input === ''}>Catch Em All!!</button>
        </form>
    </div>
)
}

export default SearchBar
    