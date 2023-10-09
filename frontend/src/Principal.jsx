import React, { useEffect, useState } from "react";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import './Principal.css'
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
        <Header/>
        <Sidebar/>

        </>
    )
}