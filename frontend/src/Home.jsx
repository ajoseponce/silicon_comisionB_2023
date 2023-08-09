import React from "react";
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
export function Home(){
    return(
        <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/principal">Principal</Link></li>
            </ul>
        </div>
      
        </>
    )
}