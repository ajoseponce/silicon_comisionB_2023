import React, { useEffect, useState } from "react";
import * as API from '../../servicios/servicios'
import { Link } from "react-router-dom";
import { Menu } from "../../menu";
import { Vigia } from "../../Vigia";
export function Modelos(){
    const [modelos, setModelos] = useState([])
    const [nombre, setNombre] = useState('')
    const [id_fabricante, setIdFabricante] = useState('')
    const [fabricantes, setFabricantes] = useState([])
    const [mensaje, setMensaje] = useState('')
   
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show()
        })
      }
    useEffect(()=>{
       
        API.getModelos().then(setModelos)
        API.getFabricantes().then(setFabricantes)
        
    }, [])

    const eliminar = async(id_modelo)=>{
        if(confirm('Esta seguro de eliminar este registro?')){
            const borrado = await API.deleteModelo(id_modelo);
            if(borrado.status){

                window.location.reload(true)
            }else{
                alert("No se puede eliminar porque ocurrio el error");
            }
        }
        
    }
    
    const guardarModelo = async(event)=>{
        event.preventDefault();
        const respuesta = await API.AddModelo({nombre, id_fabricante});
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastBootstrap.show()

            setTimeout(()=>{
                window.location.href='/modelos'
                }, 5000)
        }
        return;
    }
    // const ver_permisos =  async (id_rol)=>{
    //     const menu='/modelos';
    //     const respuesta= await API.ver_permisos({id_rol, menu });
    //     if(respuesta.status){
    //         setPermisoDenegado(true)
    //     }else{
    //         setPermisoDenegado(false)
    //     }
    // }
    return(
        <>
        <Menu/>
        <Vigia/>
        
        <table class="table table-striped">
        <thead>
            <tr>
                
                <th colspan="3">
                    <Link  class="btn btn-primary btn-sm"  to="/agregarmodelo">Agregar Modelo link</Link>
                    <button  class="btn btn-outline-primary  btn-sm"  data-bs-toggle="modal"  data-bs-target="#exampleModal" >Agregar</button>
                    {/* <button type="button" class="btn btn-danger" id="liveToastBtn">Show live toast</button> */}
               
                </th>
            </tr>
            <tr>
                <th>Descripcion</th>
                <th>Fabricante</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {modelos.map((modelo)=>(
                <tr>
                <td >{modelo.nombre}</td>    
                <td >{modelo.fabricante}</td> 
               
                <td >
                    <button onClick={()=>modificar(modelo.id_modelo )}  data-bs-toggle="modal"  data-bs-target="#exampleModal" class="btn btn-warning btn-sm" >Editar</button>
                    <button onClick={()=>eliminar(modelo.id_modelo )}  class="btn btn-danger btn-sm" >Eliminar</button>
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
                <form onSubmit={guardarModelo}>
                <div class="modal-body">
                
                    
                    <div className="form-floating">
                    <input 
                    required
                    type="text" 
                    value={nombre}
                    onChange={(event)=>setNombre(event.target.value)}
                    className="form-control" 
                    placeholder="Nombre del fabricante"
                    />
                    <label for="floatingInput">Nombre del Modelo</label>
                    </div>
                    <div className="form-floating">
                    
                    <select required onChange={(event)=>setIdFabricante(event.target.value)} className="form-control">
                    <option selected value="">Seleccione una opcion</option>
                        {fabricantes.map((f)=>(
                        
                        <option value={f.id_fabricante}>{f.nombre}</option>
                        ))}
                    </select>
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
                
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                {mensaje}
                </div>
            </div>
        </div>
           
        
         </>
    )
}