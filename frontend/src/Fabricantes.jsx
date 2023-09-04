import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import './Fabricantes.css'
import { Link } from "react-router-dom";

export function Fabricantes(){
    const [fabricantes, setFabricantes]=useState([])

    useEffect(()=>{
        API.getFabricantes().then(setFabricantes)
    }, [])

    const eliminar =(e, id_fabricante)=>{
        e.preventDefault();
        API.deleteFabricante(id_fabricante);
        window.location.reload(true)
    }
    return(
        <>
       <table>
            <tr>
                <td className="letra_roja" colspan="3"><Link className="borde_negro" to="/agregarfabricante">Agregar</Link></td>    
            </tr>
            <tr>
                <td className="letra_roja">Descripcion</td>
                <td className="letra_roja">Estado</td>
                <td className="letra_roja">#</td>
            </tr>
            {fabricantes.map((fabricante)=>(
                <tr>
                <td className="borde_negro">{fabricante.nombre}</td>    
                <td className="borde_negro">{fabricante.estado}</td>
                <td className="borde_negro"><button onClick={(event)=>eliminar(event, fabricante.id_fabricante )} className="boton_rojo">Eliminar</button></td>
                </tr>
            ))}
           
        </table>
        </>
    )
}