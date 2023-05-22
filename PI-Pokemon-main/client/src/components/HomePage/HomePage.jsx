import React from "react";
import CardsContainer from '../CardsContainer/CardsContainer'
import './Homepage.modules.css'
//import CardsContainer from "../CardsContainer/CardsContainer";
import {NavLink} from 'react-router-dom'
import Filter from '../Filter/Filter'


const Home = () => { 
    return ( 
        <div className="home">
            <CardsContainer/>
        </div>
    )
}

export default Home