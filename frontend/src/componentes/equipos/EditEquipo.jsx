import React, { useEffect, useState } from "react";
import * as API from '../../servicios/servicios'
import { Link, useParams } from "react-router-dom";

export function EditEquipo(){
    const [nombre_equipo, setNombre] = useState('')
    const [id_modelo, setModelo] = useState('')
    const [id_ubicacion, setUbicacion] = useState('')
    const [serial, setSerial] = useState('')
    const [id_tipo_equipo, setTipoEquipo] = useState('')

    const [modelos, setModelos] = useState([])
    const [tiposequipos, setTiposEquipos] = useState([])
    const [ubicaciones, setUbicaciones] = useState([])
    const [mensaje, setMensaje] = useState('')

    const {id_equipo} = useParams()
   
    useEffect(()=>{
        traer_datos();
        API.getModelos().then(setModelos)
        API.getTiposEquipos().then(setTiposEquipos)
        API.getUbicaciones().then(setUbicaciones)
      },[])
      
    

      const traer_datos =  async ()=>{
         const datos_equipo= await API.getEquipoByID(id_equipo);
         console.log(datos_equipo)
         setNombre(datos_equipo.nombre)
         setModelo(datos_equipo.id_modelo)
         setUbicacion(datos_equipo.id_ubicacion)
         setSerial(datos_equipo.serial)
         setTipoEquipo(datos_equipo.id_tipo_equipo)
      }

    const editarEquipo = async(event)=>{
        event.preventDefault();
        const respuesta = await API.EditEquipo({nombre_equipo, id_modelo, id_ubicacion, id_tipo_equipo, serial}, id_equipo)
        
        if(respuesta.status){
            setMensaje(respuesta.mensaje)
            setTimeout(()=>{
                setMensaje('')
                window.location.href='/equipos'
                }, 3000)
        }
        return;
    }
    return(
        <>
        <main className="form-signin w-100 m-auto">
              <form onSubmit={editarEquipo}>
                <div>
                    {mensaje}
                </div>
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={nombre_equipo}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  placeholder="Nombre del equipo"
                  />
                  <label for="floatingInput">Nombre del Equipo</label>
                </div>
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={serial}
                  onChange={(event)=>setSerial(event.target.value)}
                  className="form-control" 
                  placeholder="Serial"
                  />
                  <label for="floatingInput">Serial</label>
                </div>
                <div className="form-floating">
                  
                 <select onChange={(event)=>setModelo(event.target.value)} className="form-control">
                    {modelos.map((m)=>(
                      
                    <option selected={(m.id_modelo==id_modelo)?`selected`:``} value={m.id_modelo}>{m.nombre}-{m.fabricante}</option>
                    ))}
                 </select>
                 <label for="floatingInput">Modelo</label>
                </div>
                <div className="form-floating">
                  
                 <select onChange={(event)=>setTipoEquipo(event.target.value)} className="form-control">
                    {tiposequipos.map((te)=>(
                      
                    <option selected={(te.id_tipo_equipo==id_tipo_equipo)?`selected`:``} value={te.id_tipo_equipo}>{te.nombre}</option>
                    ))}
                 </select>
                 <label for="floatingInput">Tipo de Equipo</label>
                </div>  
                <div className="form-floating">
                  
                 <select onChange={(event)=>setUbicacion(event.target.value)} className="form-control">
                    {ubicaciones.map((u)=>(
                      
                    <option selected={(u.id_ubicacion==id_ubicacion)?`selected`:``} value={u.id_ubicacion}>{u.nombre}</option>
                    ))}
                 </select>
                 <label for="floatingInput">Ubicacion</label>
                </div>  
               
                <button className="btn btn-primary" type="submit" >Guardar Edicion</button>
                <Link to="/equipos" >Volver</Link>
                
              </form>
          </main>
        </>
    )
}