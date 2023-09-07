import React, { useEffect, useState } from "react";
import { Menu } from "./menu";

export function Principal(){
const [usuario, setUsuario]= useState('')
    useEffect(()=>{
        const usuarioLogueado = JSON.parse(localStorage.getItem('usuario'))
        if(usuarioLogueado){
            setUsuario(usuarioLogueado)
        }else{
            window.location.href='/'
        }
      },[])


    return(
        <>
        <Menu/>
       
        </>
    )
}