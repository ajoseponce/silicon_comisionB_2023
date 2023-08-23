import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import './Fabricantes.css'

export function Fabricantes(){
    const [fabricantes, setFabricantes]=useState([])

    useEffect(()=>{
        API.getFabricantes().then(setFabricantes)
    }, [])

    const eliminar =(e, id_fabricante)=>{
        e.preventDefault();

        console.log('el id que vamos a eliminar es el ', id_fabricante)
        API.deleteFabricante(id_fabricante);
        API.getFabricantes().then(setFabricantes);
    }
    return(
        <>
       <table>
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