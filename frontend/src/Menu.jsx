import React, { useEffect, useState } from "react";
import reactLogo from './assets/react.svg'
import './Menu.css';
import { Link } from "react-router-dom";
import * as API from './servicios/servicios'

export function Menu(){
   
    const [menus, setMenu]= useState([])
    const [user, setUser]= useState()


    useEffect(()=>{
        const datos_usuario = JSON.parse(localStorage.getItem('usuario'));

        if(!datos_usuario){
            window.location.href='/';
            return;
        }
        setUser(datos_usuario.apellido+' '+datos_usuario.nombre)
        traer_menu(datos_usuario.id_rol);
    },[])

    const traer_menu =  async (id_rol)=>{
        const datos= await API.getMenuByRol(id_rol);
        setMenu(datos.menu)
    }

    const salir = ()=>{
        localStorage.removeItem('usuario');
        window.location.href='/';
    }
    return(
        <>
            <img src={reactLogo} className="logo react" alt="React logo" />
            <div>
                <ul>
                    <li><Link to="/principal">Inicio</Link></li>
                    {menus.map((m)=>(
                    <li><Link to={m.href}>{m.nombre}</Link></li>
                    ))}
                    <li>{user}</li>
                    <li><button onClick={salir}>Cerrar Session</button></li>
                </ul>
            </div>
        </>
    )
}