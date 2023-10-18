import React, { useState } from "react";
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import './Login.css'
import * as API from './servicios/servicios'

export function Login(){
const [user, setUsername]= useState('')
const [pass, setPasword]= useState('')
const [mensaje, setMensaje]= useState('')

const ingresar = async(event)=>{
  event.preventDefault();
  const usuario = await API.Login({user, pass})
  console.log(usuario);
   if(usuario.status){
    window.localStorage.setItem('usuario',JSON.stringify(usuario.datos[0]) )
   

    window.localStorage.setItem('token', JSON.stringify(usuario.token))
    window.location.href='/principal';
   }else{

    
    setMensaje(usuario.mensaje)
        setTimeout(()=>{
            setMensaje('')
            
            }, 5000)
   }
  return;
}
    return(
        <>
            <div class="container-fluid">
            <main class="form-signin w-100 m-auto">
              <form onSubmit={ingresar}>
                  <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} classNameName="logo" alt="Vite logo" />
                  </a>
                <h1 className="h3 mb-3 fw-normal">Por favor ingresar</h1>
                {
                 mensaje? 
                <div className="alert alert-warning" role="alert">
                 {mensaje}
                </div>
              :<></>
                  }
                <div className="form-floating">
                  <input 
                  required
                  type="text" 
                  value={user}
                  onChange={(event)=>setUsername(event.target.value)}
                  className="form-control" 
                  id="floatingInput" 
                  placeholder="jose@gmail.com"
                  />
                  <label for="floatingInput">Usuario</label>
                </div>
                <div className="form-floating">
                  <input
                  required 
                  type="password" 
                  value={pass} 
                  onChange={(event)=>setPasword(event.target.value)}
                  className="form-control" 
                  id="floatingPassword" 
                  placeholder="Password"
                  />
                  <label for="floatingPassword">Contraseña</label>
                </div>
               
                <button className="btn btn-primary" type="submit" >Ingresar</button>
                <p className="mt-5 mb-3 text-body-secondary letra_roja"> En el caso de no tener cuenta <Link to="/registro">Registrarse</Link></p>
              </form>
          </main>
              
            </div>
          
        </>
    )
}