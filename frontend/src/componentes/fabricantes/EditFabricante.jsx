import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as API from '../../servicios/servicios'

export function EditFabricante(){
const [nombre, setNombre] = useState('')
const [mensaje, setMensaje] = useState('')

const {id_fabricante} = useParams()

useEffect(()=>{
  traer_datos();
},[])

const traer_datos =  async ()=>{
   const datos_fabricante= await API.getFabricantesByID(id_fabricante);
    setNombre(datos_fabricante.nombre)
}

const editarFabricante = async(event)=>{
    event.preventDefault();
    const respuesta = await API.EditFabricante({nombre}, id_fabricante)
    
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
              <form onSubmit={editarFabricante}>
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
                  <label for="floatingInput">Datos del Fabricante</label>
                </div>
               
               
                <button className="btn btn-primary" type="submit" >Guardar Edicion</button>
                <Link to="/fabricantes" >Volver</Link>
                
              </form>
          </main>
        </>
    )
}