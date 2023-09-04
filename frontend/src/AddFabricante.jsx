import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as API from './servicios/servicios'

export function AddFabricante(){
const [nombre, setNombre] = useState('')
const [mensaje, setMensaje] = useState('')
const guardarFabricante = async(event)=>{
    event.preventDefault();
    const respuesta = await API.AddFabricante({nombre})
    
    if(respuesta.status){
        setMensaje(respuesta.mensaje)
        setTimeout(()=>{
            setMensaje('')
            window.location.href='/fabricantes'
            }, 5000)
    }
    return;
  }
    return(
        <>
       <main className="form-signin w-100 m-auto">
              <form onSubmit={guardarFabricante}>
                <div>
                    {mensaje}
                </div>
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={nombre}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  placeholder="Nombre del fabricante"
                  />
                  <label for="floatingInput">Nombre del Fabricante</label>
                </div>
               
               
                <button className="btn btn-primary" type="submit" >Guardar</button>
                <Link to="/fabricantes" >Volver</Link>
                
              </form>
          </main>
        </>
    )
}