import React, { useState } from "react";
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import './Login.css'
import * as API from './servicios/servicios'

export function Login(){
const [user, setUsername]= useState('')
const [pass, setPasword]= useState('')
const [mitoken, setToken]= useState('')

const ingresar = async(event)=>{
  event.preventDefault();
  const usuario = await API.Login({user, pass})
   console.log(usuario)
   if(usuario.status){
    setToken(usuario.token)
    alert('Pase señor')
    window.location.href='/principal'
   }else{
    alert(usuario.mensaje)
   }
  return;
}
    return(
        <>
          <main className="form-signin w-100 m-auto">
              <form onSubmit={ingresar}>
                  <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} classNameName="logo" alt="Vite logo" />
                  </a>
                <h1 className="h3 mb-3 fw-normal">Por favor ingresar</h1>
                
                <div className="form-floating">
                  <input 
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
        </>
    )
}