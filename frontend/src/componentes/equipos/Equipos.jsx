import React, { useEffect, useState } from "react";
import './Equipos.css'
import * as API from '../../servicios/servicios'
import { Menu } from "../../menu";
import { Link } from "react-router-dom";

 export function Equipos(){
    const [equipos, setEquipos] = useState([])
    const [mensaje , setMensaje] = useState([])

    useEffect(()=>{
        API.getEquipos().then(setEquipos)}, []
    )

// creamos la funcion para cambiar los estados 
const cambiar_estado = async (e, id_equipo, estado_actual)=>{
    e.preventDefault();
    const actualizar = (estado_actual=="A")?"B":"A";
    const respuesta= await API.ActualizarEstadoEquipo(id_equipo, {actualizar});
    if(respuesta.status){
        setMensaje(respuesta.mensaje)
        setTimeout(()=>{
            setMensaje('')
            window.location.href='/equipos'
        }, 3000)
    }
    
}

    return(
        <>
        <div>
            {mensaje}
        </div>
        <Menu/>
        <table>
        <tr>
                <td className="letra_roja" colspan="3"><Link className="borde_negro" to="/agregarequipo">Agregar</Link></td>    
            </tr>
            <tr>
                <td className="letra_roja">Descripcion</td>
                <td className="letra_roja">Modelo</td>
                <td className="letra_roja">Tipo</td>
                <td className="letra_roja">Lugar</td>
                <td className="letra_roja">Estado</td>
                <td className="letra_roja" colspan="2">Acciones</td>
            </tr>
            {equipos.map((ee)=>(
                <tr>
                <td className="borde_negro">{ee.nombre}</td>
                <td className="borde_negro">{ee.modelo_fabricante}</td>
                <td className="borde_negro">{ee.tipo_equipo}</td>
                <td className="borde_negro">{ee.lugar_ubicacion}</td>
                <td className="borde_negro">{ee.estado}</td>
                <td className="borde_negro">
               
                    <Link to={`/editequipo/${ee.id_equipo}`} ><button className="boton_verde">Editar</button></Link>
             
               
                </td>
                {(ee.estado=="A")?
                <td className="borde_negro"><button onClick={(event)=>cambiar_estado(event, ee.id_equipo, ee.estado )} className="boton_rojo">Desactivar</button></td>
                :
                <td className="borde_negro"><button onClick={(event)=>cambiar_estado(event, ee.id_equipo, ee.estado )} className="boton_azul">Activar</button></td>
                }
                
                </tr>
            ))}
           
        </table>
        </>
    )
 }