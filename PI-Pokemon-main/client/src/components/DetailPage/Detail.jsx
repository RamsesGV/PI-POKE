import React from "react";
import {NavLink} from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import {clearDetail,pokeDetail} from '../../Redux/Actions/Actions'
import { useEffect } from "react";
import './Detail.modules.css'

const Detail = (props) => { 
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(pokeDetail(props.match.params.id))
    }, [dispatch,props.match.params.id]);

const pokemon = useSelector((state) => state.pokeDetail);

const handleClick = (event) => { 
    dispatch(clearDetail())
}

return (
    <div className="detail">
    <NavLink to={"/home"}>
        <button className="buttonD" onClick={(event) => handleClick(event)}>Back Home!</button>
    </NavLink>
    {pokemon.length ? (
        <div className="detail">
        <div >
        <h1> Name: {pokemon[0].name.toUpperCase()} </h1>
        <img
            src={pokemon[0].img}
            alt="Nothing Here!"
           // width={"200px"}
            //height={"250px"}
        />
            <h2>{
            pokemon[0].types.join(" - ").toUpperCase()
            }
            </h2>
        </div>
        <div className="stats" >
        <h3 >ID: {pokemon[0].id}</h3>
        <h2 >Hp: {pokemon[0].hp}</h2>
        <h2 >attack: {pokemon[0].attack}</h2>
        <h2 >defense: {pokemon[0].defense}</h2>
        <h2 >speed: {pokemon[0].speed}</h2>
        <h2 >height: {pokemon[0].height}</h2>
        <h2 >weight: {pokemon[0].weight}</h2>
        </div>
        </div>
    ) : (
        <p>Cargando....</p>
    )}
    </div>
);
};


export default Detail;