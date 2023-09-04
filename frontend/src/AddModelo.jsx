import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as API from './servicios/servicios'
export function AddModelo(){
    const [nombre, setNombre] = useState('')
    const [id_fabricante, setIdFabricante] = useState('')
    const [fabricantes, setFabricantes] = useState([])
    const [mensaje, setMensaje] = useState('')

    useEffect(()=>{
        API.getFabricantes().then(setFabricantes)
    }, [])

    const guardarModelo = async(event)=>{
        event.preventDefault();
        const respuesta = await API.AddModelo({nombre, id_fabricante});
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/modelos'
                }, 5000)
        }
        return;
      }

    return(
        <>
            <main className="form-signin w-100 m-auto">
              <form onSubmit={guardarModelo}>
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
                  <label for="floatingInput">Nombre del Modelo</label>
                </div>
                <div className="form-floating">
                  
                 <select onChange={(event)=>setIdFabricante(event.target.value)} className="form-control">
                    {fabricantes.map((f)=>(
                    <option value={f.id_fabricante}>{f.nombre}</option>
                    ))}
                 </select>
                </div>
               
               
                <button className="btn btn-primary" type="submit" >Guardar</button>
                <Link to="/modelos" >Volver</Link>
                
              </form>
          </main>
        </>
    )
}