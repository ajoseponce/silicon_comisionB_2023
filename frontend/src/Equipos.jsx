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
                <td className="letra_roja">Lugar</td>
                <td className="letra_roja">Estado</td>
            </tr>
            {equipos.map((ee)=>(
                <tr>
                <td className="borde_negro">{ee.nombre}</td>
                <td className="borde_negro">{ee.modelo_fabricante}</td>
                <td className="borde_negro">{ee.lugar_ubicacion}</td>
                <td className="borde_negro">{ee.estado}</td>
                </tr>
            ))}
           
        </table>
        </>
    )
 }