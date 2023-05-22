import React, {} from "react";
import './Landing.modules.css'
import { NavLink } from 'react-router-dom';






const landing = () => { 
    return ( 
        
        <div className="landingContainer">
            <p className="ptittle">Welcome to Pokemon World!</p>
            <NavLink to={'/home'}>
            <button className="buttonL" >Go Home Trainer!<img src="" alt="" /></button>
            </NavLink>
            <div className="back"> 
                <img src="https://wallpapercave.com/wp/d4emJ2t.jpg"  alt="landing page"/>
            </div>
        
        
        </div>
        
    )
}

export default landing;