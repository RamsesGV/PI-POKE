import React from "react";
import './Landing.modules.css'
import { NavLink } from 'react-router-dom';



const landing = () => { 
    return ( 
        <div className="landingContainer">
            <p>pene</p>
            <div className="back"> 
                <img src=""  alt="landing page"/>
            </div>
            <NavLink to={'/home'}>
            <button className="buttonL" >Go Home Trainer!<img src="" alt="" /></button>
            </NavLink>
        
        </div>
    )
}

export default landing;