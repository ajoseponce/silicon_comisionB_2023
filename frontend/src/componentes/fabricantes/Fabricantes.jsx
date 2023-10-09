import React, { useEffect, useState } from "react";
import * as API from '../../servicios/servicios'
import './Fabricantes.css'
import { Link } from "react-router-dom";
import { Menu } from "../../menu";
import { Vigia } from "../../Vigia";

export function Fabricantes(){
    const [fabricantes, setFabricantes]=useState([])
    const [id_fabricante, setIdFabricantes]=useState('')
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')

    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
    const guardarFabricante = async(event)=>{
        event.preventDefault();
        if(id_fabricante){
            const respuesta = await API.EditFabricante({nombre}, id_fabricante)
    
            if(respuesta.status){
                setMensaje(respuesta.mensaje)
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                toastBootstrap.show()
                setTimeout(()=>{
                    setMensaje('')
                    window.location.href='/fabricantes'
                    // API.getFabricantes().then(setFabricantes)
                    }, 2500)
            }
            return;
        }else{
            const respuesta = await API.AddFabricante({nombre})
            if(respuesta.status){
                setMensaje(respuesta.mensaje)
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
                toastBootstrap.show()
                setTimeout(()=>{
                    setMensaje('')
                    window.location.href='/fabricantes'
                    // API.getFabricantes().then(setFabricantes)
                    }, 2500)
            }
            return;
        }
        
    }
    
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
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()
            setTimeout(()=>{
                setMensaje('')
                toastBootstrap.hide()
                API.getFabricantes().then(setFabricantes)
                // window.location.href='/fabricantes'
            }, 2500)
        }
        
    }

    const editar_registro = async (e, id_fabricante)=>{
        e.preventDefault();
        
        console.log('el id que vamos a editar es el ', id_fabricante)
        setIdFabricantes(id_fabricante)
        const datos_fabricante= await API.getFabricantesByID(id_fabricante);
        console.log(datos_fabricante)
        setNombre(datos_fabricante.nombre)
    }

    

    return(
        <>
        
        <Menu/>
        <Vigia/>
        <table class="table table-striped">
        <thead>
            <tr>
                
                <th colspan="4">
                <Link class="btn btn-outline-primary btn-sm" to="/agregarfabricante">Agregar</Link>
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
            {fabricantes.map((fabricante)=>(
                <tr>
                <td >{fabricante.nombre}</td>    
                <td >{fabricante.estado}</td>
                <td >
                    <Link to={`/editfabricante/${fabricante.id_fabricante}`} ><button class="btn btn-warning btn-sm">Editar Link</button></Link>
                    <button   data-bs-toggle="modal"  data-bs-target="#exampleModal" onClick={(event)=>editar_registro(event, fabricante.id_fabricante)} class="btn btn-outline-warning btn-sm">Editar modal</button>
                    
                {(fabricante.estado=="A")?
                <button class="btn btn-danger btn-sm" onClick={(event)=>cambiar_estado(event, fabricante.id_fabricante, fabricante.estado )} >Desactivar</button>
                :
                <button class="btn btn-success btn-sm" onClick={(event)=>cambiar_estado(event, fabricante.id_fabricante, fabricante.estado )} >Activar</button>
                
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
                <form onSubmit={guardarFabricante}>
                <div class="modal-body">
                
                    
                    <div className="form-floating">
                    <input 
                    type="text" 
                    value={nombre}
                    onChange={(event)=>setNombre(event.target.value)}
                    className="form-control" 
                    placeholder="Nombre del fabricante"
                    />
                    <label for="floatingInput">Nombre del fabricante</label>
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