import React, { useEffect, useState } from "react";
import * as API from './servicios/servicios'
import { Link } from "react-router-dom";
export function Modelos(){
    const [modelos, setModelos] = useState([])
    useEffect(()=>{
        API.getModelos().then(setModelos)
    }, [])

    const eliminar = async(id_modelo)=>{
        const borrado = await API.deleteModelo(id_modelo);
        if(borrado.status){
            window.location.reload(true)
        }else{
            alert("No se puede eliminar porque ocurrio el error");
        }
    }
    return(
        <>
        <table>
            <tr>
                
                <td colspan="3" className="letra_roja"><Link className="borde_negro" to="/agregarmodelo">Agregar Modelo</Link></td>
            </tr>
            <tr>
                <td className="letra_roja">Descripcion</td>
                <td className="letra_roja">Fabricante</td>
                <td className="letra_roja">#</td>
            </tr>
            {modelos.map((modelo)=>(
                <tr>
                <td className="borde_negro">{modelo.nombre}</td>    
                <td className="borde_negro">{modelo.fabricante}</td> 
                <td className="borde_negro"><button onClick={()=>eliminar(modelo.id_modelo )} className="boton_rojo">Eliminar</button></td>
                </tr>
            ))}
           
        </table>
         </>
    )
}