import React, { useEffect, useState } from "react";
import * as API from '../../servicios/servicios'

import { Menu } from "../../menu";
import { Vigia } from "../../Vigia";

export function Ubicaciones(){
    const [ubicaciones, setUbicaciones]=useState([])
    const [id_ubicacion, setIdUbicaciones]=useState('')
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
    const guardarUbicacion = async(event)=>{
        event.preventDefault();
        if(id_ubicacion){
            const respuesta = await API.EditUbicacion({nombre}, id_ubicacion)
    
            if(respuesta.status){
                setMensaje(respuesta.mensaje)
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                toastBootstrap.show()
                setTimeout(()=>{
                    setMensaje('')
                    window.location.href='/ubicaciones'
                    // API.getUbicaciones().then(setUbicaciones)
                    }, 2500)
            }
            return;
        }else{
            const respuesta = await API.AddUbicacion({nombre})
            if(respuesta.status){
                setMensaje(respuesta.mensaje)
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                toastBootstrap.show()
                setTimeout(()=>{
                    setMensaje('')
                    window.location.href='/ubicaciones'
                    // API.getUbicaciones().then(setUbicaciones)
                    }, 2500)
            }
            return;
        }
        
    }
    
    useEffect(()=>{
        API.getUbicaciones().then(setUbicaciones)
    }, [])

    const cambiar_estado = async (e, id_ubicacion, estado_actual)=>{
        e.preventDefault();
        const actualizar = (estado_actual=="A")?"B":"A";
        console.log(actualizar)
        const respuesta= await API.ActualizarEstadoUbicacion(id_ubicacion, {actualizar});
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()
            API.getUbicaciones().then(setUbicaciones)
            setTimeout(()=>{
                setMensaje('')
                toastBootstrap.hide()
                
                // window.location.href='/ubicaciones'
            }, 2500)
        }
        
    }

    const editar_registro = async (e, id_ubicacion)=>{
        e.preventDefault();
        
        console.log('el id que vamos a editar es el ', id_ubicacion)
        setIdUbicaciones(id_ubicacion)
        const datos_ubicacion= await API.getUbicacionesByID(id_ubicacion);
        console.log(datos_ubicacion)
        setNombre(datos_ubicacion.nombre)
    }

    return(
        <>
        <Menu/>
        <Vigia/>
        <table class="table table-striped">
        <thead>
            <tr>
                <th colspan="4">
                <button  class="btn btn-outline-primary  btn-sm"  data-bs-toggle="modal"  data-bs-target="#exampleModal" >Agregar Modal</button>
                </th>    
            </tr>

            <tr>
                <td>Descripcion</td>
                <td>Estado</td>
                <td colspan="2">Acciones</td>
            </tr>
            </thead>
            <tbody>
            {ubicaciones.map((ubicacion)=>(
                <tr>
                <td >{ubicacion.nombre}</td>    
                <td >{ubicacion.estado}</td>
                <td >
                    
                    <button   data-bs-toggle="modal"  data-bs-target="#exampleModal" onClick={(event)=>editar_registro(event, ubicacion.id_ubicacion)} class="btn btn-outline-warning btn-sm">Editar modal</button>
                    
                {(ubicacion.estado=="A")?
                <button class="btn btn-danger btn-sm" onClick={(event)=>cambiar_estado(event, ubicacion.id_ubicacion, ubicacion.estado )} >Desactivar</button>
                :
                <button class="btn btn-success btn-sm" onClick={(event)=>cambiar_estado(event, ubicacion.id_ubicacion, ubicacion.estado )} >Activar</button>
                
                }
                </td>
                </tr>
            ))}
            </tbody>
            
           
        </table>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Datos del modelo </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form onSubmit={guardarUbicacion}>
                <div class="modal-body">
                
                    
                    <div className="form-floating">
                    <input required
                    type="text" 
                    value={nombre}
                    onChange={(event)=>setNombre(event.target.value)}
                    className="form-control" 
                    placeholder="Nombre del ubicacion"
                    />
                    <label for="floatingInput">Nombre del ubicacion</label>
                    </div>
                    <div className="form-floating">
                    <input required
                    type="number" 
                    value={numero}
                    onChange={(event) => {
                        setNumero((event.target.value < 0)?event.target.value * -1:event.target.value);
                      }}
                    className="form-control" 
                    placeholder="Numero"
                    />
                    <label for="floatingInput">Numero</label>
                    </div>
                </div>
                
                <div class="modal-footer">
                <button className="btn btn-primary" type="submit" >Guardar</button>
                    
                </div>
                </form>
                </div>
            </div>
        </div>

        <div class="toast-container position-fixed bottom-0 end-0 p-3">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                
                <strong class="me-auto">Mensaje</strong>
                
                
                </div>
                <div class="toast-body">
                {mensaje}
                </div>
            </div>
        </div>
        </>
    )
}