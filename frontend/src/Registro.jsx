import React, { useState } from "react";
import viteLogo from '/vite.svg'
import { Link } from "react-router-dom";
import * as API from './servicios/servicios'

export function Registro(){
    
    const [apellido, setApellido]= useState('')
    const [nombre, setNombre]= useState('')
    const [dni, setDni]= useState('')
    const [user, setUser]= useState('')
    const [pass, setPass]= useState('')
    const [nick, setNick]= useState('')
    const [pass2, setPassDos]= useState('')
    const [mensajeAlerta, setMensajeAlerta]= useState('')
    const [mensajeAlertaNick, setMensajeAlertaNick]= useState('')
    const [correo, setCorreo]= useState('')
    const [id_rol, setIdRol]= useState('1')



    const registro = async(event)=>{
      event.preventDefault();
      if(pass == pass2){
        const registro = await API.Registro({user, nombre, dni, user, pass, correo, id_rol})
        if(registro.status){
           alert(registro.mensaje)
           window.location.href='/login'
        }else{
          alert(registro.mensaje)
         
        }
       return;
      }else{
        setMensajeAlerta('Las contraseñas deben ser iguales.')
        setTimeout(()=>{
          setMensajeAlerta('')
          setPassDos('')
            
            }, 2000)
      }
    }

    const validarNick = async(event)=>{
          // event.preventDefault();
          
          const validacion = await API.ValidarNick({user})
          console.log(validacion)
            if(validacion.status){
              setMensajeAlertaNick(validacion.mensaje)
              setNick('')
              setTimeout(()=>{
                setMensajeAlertaNick('')
                  setUser('')
                  // setNick('')
                  }, 5000)
              // un icono rojo
            }else{
              // un icono lojo
              setNick('ok')
            }
         
    }

    return(
        <>
        <main className="form-signin w-100 m-auto">
              <form onSubmit={registro}>
                  <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                <h1 className="h3 mb-3 fw-normal">Por favor completar los datos</h1>
                
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={apellido}
                  onChange={(event)=>setApellido(event.target.value)}
                  className="form-control" 
                  id="apellido" 
                  />
                  <label for="apellido">Apellido</label>
                </div>
                <div className="form-floating">
                  <input 
                  type="text" 
                  value={nombre}
                  onChange={(event)=>setNombre(event.target.value)}
                  className="form-control" 
                  id="nombre" 
                  />
                  <label for="nombre">Nombre</label>
                </div>

                <div className="form-floating">
                  <input 
                  type="number" 
                  value={dni}
                  onChange={(event)=>setDni(event.target.value)}
                  className="form-control" 
                  id="dni" 
                  />
                  <label for="dni">DNI</label>
                </div>
                <div className="form-floating">
                <input 
                  type="email" 
                  value={correo}
                  onChange={(event)=>setCorreo(event.target.value)}
                  className="form-control" 
                  id="correo" 
                  />
                  <label for="correo">Correo</label>
                </div>
                
                <div className="form-floating">
                  <input 
                  required
                  type="text" 
                  value={user}
                  onChange={(event)=>setUser(event.target.value)}
                  onBlur={(event)=>validarNick(event.target.value)}
                  className="form-control" 
                  id="user" 
                  />
                  {
                 nick? 
                
                 <i class="bi bi-check-circle"></i>
                
                :<></>
                  }
                  <label for="usuario">Usuario</label>
                </div>
                {
                 mensajeAlertaNick? 
                <div className="alert alert-danger" role="alert">
                 {mensajeAlertaNick}
                </div>
                :<></>
                  }
                <div className="form-floating">
                  <input 
                  required
                  type="password" 
                  value={pass}
                  onChange={(event)=>setPass(event.target.value)}
                  className="form-control" 
                  id="pass" 
                  />
                  <label for="password">Password</label>
                </div>
                {
                 mensajeAlerta? 
                <div className="alert alert-danger" role="alert">
                 {mensajeAlerta}
                </div>
              :<></>
                  }
                <div className="form-floating">
                  <input 
                  required
                  type="password" 
                  value={pass2}
                  onChange={(event)=>setPassDos(event.target.value)}
                  className="form-control" 
                  id="pass2" 
                  />
                  <label for="password">Repita Password</label>
                </div>
                <button className="btn btn-primary" type="submit" >Registrarme</button>
                <p className="mt-5 mb-3 text-body-secondary letra_roja"> En el caso de tener cuenta <Link to="/login">Ingresar</Link></p>
              </form>
          </main>
        </>
    )
}