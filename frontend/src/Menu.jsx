import React from "react";
import reactLogo from './assets/react.svg'
import './Menu.css';
import { Link } from "react-router-dom";

export function Menu(){

    return(
        <>
            <img src={reactLogo} className="logo react" alt="React logo" />
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categorias">Categorias</Link></li>
                    <li><Link to="/equipos">Equipos</Link></li>
                    <li><Link to="/fabricantes">Fabricantes</Link></li>
                    <li><Link to="/modelos">Modelos</Link></li>
                    <li><Link to="/usuario">Usuarios</Link></li>
                </ul>
            </div>
        </>
    )
}