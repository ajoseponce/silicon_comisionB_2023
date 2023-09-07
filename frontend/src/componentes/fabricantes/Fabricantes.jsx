import React, { useEffect, useState } from "react";
import * as API from '../../servicios/servicios'
import './Fabricantes.css'
import { Link } from "react-router-dom";
import { Menu } from "../../menu";

export function Fabricantes(){
    const [fabricantes, setFabricantes]=useState([])
    const [mensaje, setMensaje] = useState('')
    
    useEffect(()=>{
        API.getFabricantes().then(setFabricantes)
    }, [])

    const cambiar_estado = async (e, id_fabricante, estado_actual)=>{
        e.preventDefault();
        const actualizar = (estado_actual=="A")?"B":"A";
        console.log(actualizar)
        const respuesta= await API.ActualizarEstadoFabricante(id_fabricante, {actualizar});
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/fabricantes'
            }, 5000)
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
                <td className="letra_roja" colspan="3"><Link className="borde_negro" to="/agregarfabricante">Agregar</Link></td>    
            </tr>
            <tr>
                <td className="letra_roja">Descripcion</td>
                <td className="letra_roja">Estado</td>
                <td colspan="2" className="letra_roja">Acciones</td>
            </tr>
            {fabricantes.map((fabricante)=>(
                <tr>
                <td className="borde_negro">{fabricante.nombre}</td>    
                <td className="borde_negro">{fabricante.estado}</td>
                <td className="borde_negro"><Link to={`/editfabricante/${fabricante.id_fabricante}`} ><button className="boton_verde">Editar</button></Link></td>
                {(fabricante.estado=="A")?
                <td className="borde_negro"><button onClick={(event)=>cambiar_estado(event, fabricante.id_fabricante, fabricante.estado )} className="boton_rojo">Desactivar</button></td>
                :
                <td className="borde_negro"><button onClick={(event)=>cambiar_estado(event, fabricante.id_fabricante, fabricante.estado )} className="boton_azul">Activar</button></td>
                
                }
                
                </tr>
            ))}
           
        </table>
        </>
    )
}