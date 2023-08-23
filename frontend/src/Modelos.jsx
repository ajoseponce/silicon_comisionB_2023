import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
export function Modelos(){
    const [modelos, setModelos] = useState([])
    useEffect(()=>{
        API.getModelos().then(setModelos)
    }, [])
    return(
        <>
        <table>
            <tr>
                <td className="letra_roja">Descripcion</td>
                <td className="letra_roja">Fabricante</td>
            </tr>
            {modelos.map((modelo)=>(
                <tr>
                <td className="borde_negro">{modelo.nombre}</td>    
                <td className="borde_negro">{modelo.fabricante}</td> 
                </tr>
            ))}
           
        </table>
         </>
    )
}