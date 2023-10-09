import React, { useEffect, useState } from "react";
import './Equipos.css'
import * as API from '../../servicios/servicios'
import { Menu } from "../../menu";
import { Link } from "react-router-dom";
import { Vigia } from "../../Vigia";

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
        <Vigia/>
        <div class="table-responsive small">
        <table class="table table-striped-columns">
             <thead>
             <tr>
                <td  colspan="7" ><Link  class="btn btn-outline-success"  to="/agregarequipo">Agregar</Link></td>    
            </tr>
                <tr>
                    <th >Descripcion</th>
                    <th >Modelo</th>
                    <th >Tipo</th>
                    <th >Lugar</th>
                    <th >Estado</th>
                    <th  colspan="2">Acciones</th>
                </tr>
             </thead>
             <tbody>
            {equipos.map((ee)=>(
                <tr>
                <td >{ee.nombre}</td>
                <td >{ee.modelo_fabricante}</td>
                <td >{ee.tipo_equipo}</td>
                <td >{ee.lugar_ubicacion}</td>
                <td >{ee.estado}</td>
                <td >
                    <Link to={`/editequipo/${ee.id_equipo}`} ><button class="btn btn-warning btn-sm">Editar</button></Link>
                </td>
                {(ee.estado=="A")?
                <td><button class="btn btn-danger btn-sm" onClick={(event)=>cambiar_estado(event, ee.id_equipo, ee.estado )}>Desactivar</button></td>
                :
                <td><button class="btn btn-success btn-sm" onClick={(event)=>cambiar_estado(event, ee.id_equipo, ee.estado )} >Activar</button></td>
                }
                
                </tr>
            ))}
           </tbody>
        </table>
        </div>
        
        </>
    )
 }