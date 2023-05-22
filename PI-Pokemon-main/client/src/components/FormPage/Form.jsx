import React from "react";
import { useState, useEffect } from "react";
import {NavLink, useHistory} from 'react-router-dom'
import {createPoke,getPokeTypes,empty} from '../../Redux/Actions/Actions'
import {useDispatch, useSelector} from 'react-redux'
import validate from './validate'
import './Form.modules.css'

const CreatePokemon = () => { 
    const dispatch = useDispatch()
    const types = useSelector((state) => state.pokeTypes)
    const pokemons = useSelector((state) => state.allPokemons)
    const history = useHistory()

    const [error, setError] = useState({
        name:'',
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
    })

    const [input,setInput] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: [],
    })

    const handleChange = (event) => { 
        setInput({
            ...input,
            [event.target.name]: event.target.value,
        })
        setError(validate({...input,[event.target.name]: event.target.value},pokemons))
    }

    const handleCheck = (event) => { 
        if(event.target.checked) { 
            setInput({
                ...input,
                types: [...input.types, event.target.value]
            })
            setError(
                validate({...input,types:[...input.types, event.target.value], pokemons})
            )
        } else { 
            setInput({
                ...input,
                types: input.types.filter((pkc) => pkc !== event.target.value)
            })
            setError(
                validate(
                    {
                        ...input,
                        types:input.types.filter(
                            (pkc) => input.types.indexOf(pkc) !== input.types.indexOf(event.target.value)

                        ),
                    },
                    pokemons
                )
            )
        }
    }
    const handleSubmit = (event) => { 
        event.preventDefault(event);
        console.table({
            name: input.name,
            hp: Number(input.hp),
            attack: Number(input.attack),
            defense: Number(input.defense),
            speed: Number(input.speed),
            height: Number(input.height),
            weight: Number(input.weight),
            image: input.img,
            types: input.types.map((type) => {
            for (let i = 0; i < types.length; i++) {
                if (types[i].name === type) return types[i].id
            }
            })
        });
        dispatch(createPoke({
            name: input.name,
            hp:Number(input.hp),
            attack: Number(input.attack),
            defense: Number(input.defense),
            speed: Number(input.speed),
            height: Number(input.height),
            weight: Number(input.weight),
            image: input.img,
            types: input.types.map((type)=>{
                for (let i = 0; i< types.length;i++) { 
                    if(types[i].name === type) return types[i].id
                }
            })
        }))
        alert('register succesful')
        setInput({ 
            name: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            img: "",
            types: [],
        })
        dispatch(empty())
        history.push('/home')
    }
    useEffect(() => { 
        dispatch(getPokeTypes())
    },[])
    return( 
        <div className="container">
            <NavLink to={'/home'}> 
            <button className="homebtn">Go home</button>
            </NavLink>
            <div className="createContainer">
                <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form">
                    <div className="inputtypes">
                        <div className="inputs">

                            <div>
                                <label className="labelF">Name</label>
                                <input 
                                    autoComplete="off"
                                    type="text"
                                    value={input.name}
                                    name="name"
                                    placeholder="Name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div> 
                                <label className="labelF">Hp:</label>
                                <input
                                    type="number"
                                    value={input.hp}
                                    name="hp"
                                    placeholder="1-255"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="labelF">defense:</label>
                                <input
                                    type="number"
                                    value={input.defense}
                                    name="defense"
                                    placeholder="1-250"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="labelF">speed:</label>
                                <input
                                    type="number"
                                    value={input.speed}
                                    name="speed"
                                    placeholder="1-200"
                                    required
                                    onChange={handleChange}
                                />
                            </div>

                            <div> 
                            <label className="labelF">Height:</label>
                            <input 
                                type="number"
                                value={input.height}
                                name="height"
                                placeholder="1-200"
                                required
                                onChange={handleChange}
                            />    
                            </div>

                            <div>
                            <label className="labelF">Weight:</label>
                            <input
                                type="number"
                                value={input.weight}
                                name="weight"
                                placeholder="1-1000"
                                required
                                onChange={handleChange}
                />
                            </div>

                            <div>
                                <label className="labelF">image:</label>
                                <input
                                type="text"
                                value={input.image}
                                name="image"
                                placeholder="URL de la imagen"
                                onChange={handleChange}
                                />
                            </div>


                            


                        </div>

                        <div className="types">
                            <h3 className="titlleh3">Types:</h3>
                            <div className="typesCreated"> 
                            {types?.map((type)=> (
                                
                                <div className="typeCreate" key={type.id}>
                                <label >{type.name}</label>
                                <input
                                type={"checkbox"}
                                value={type.name}
                                name={type.name}
                                onChange={(event) => handleCheck(event)}
                                />
                            </div>    
                                )
                                
                            )}

                            </div>
                        </div>
                    </div>
                        
                        <div className="erros">
                        {error.name && <p className="errorS">{error.name}</p>}
                        {error.hp && <p className="errorS">{error.hp}</p>}
                        {error.atk && <p className="errorS">{error.attack}</p>}
                        {error.def && <p className="errorS">{error.defense}</p>}
                        {error.speed && <p className="errorS">{error.speed}</p>}
                        {error.height && <p className="errorS">{error.height}</p>}
                        {error.weight && <p className="errorS">{error.weight}</p>}
                        {error.types && <p className="errorS">{error.types}</p>}
                        </div>
                        <div>
                            <button
                                className="homeButton"
                                type="submit"
                                disabled={
                                    error.name ||
                                    error.hp ||
                                    error.attack ||
                                    error.defense ||
                                    error.speed ||
                                    error.height ||
                                    error.weight ||
                                    error.types
                                }
                                >
                                Create new Pokemon
                                </button>
                            
                        </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePokemon