import React, { useEffect, useState } from "react";
import './Equipos.css'
import * as API from './servicios/servicios'

 export function Equipos(){
    const [equipos, setEquipos] = useState([])

    useEffect(()=>{
        API.getEquipos().then(setEquipos)}, []
    )
    return(
        <>
        aqui va el listado de equipos
        <table>
            <tr>
                <td className="letra_roja">Descripcion</td>
                <td className="letra_roja">Modelo</td>
                <td className="letra_roja">Luar</td>
                <td className="letra_roja">Estado</td>
            </tr>
            {equipos.map((eq)=>(
                <tr>
                <td className="borde_negro">{eq.nombre}</td>
                <td className="borde_negro">{eq.modelo_fabricante}</td>
                <td className="borde_negro">{eq.lugar_ubicacion}</td>
                <td className="borde_negro">{eq.estado}</td>
                </tr>
            ))}
           
        </table>
        </>
    )
 }