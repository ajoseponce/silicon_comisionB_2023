import React, { useEffect, useState } from "react";
 import './Sidebar.css'
import { Link } from "react-router-dom";
import * as API from './servicios/servicios'

export function Sidebar(){
  const [menus, setMenu]= useState([])
  const [user, setUser]= useState()

  useEffect(()=>{
      const datos_usuario = JSON.parse(localStorage.getItem('usuario'));
      if(!datos_usuario){
          window.location.href='/';
          return;
      }
      
      setUser(datos_usuario.apellido+' '+datos_usuario.nombre)
      traer_menu(datos_usuario.id_rol);
  },[])

  const traer_menu =  async (id_rol)=>{
      const datos= await API.getMenuByRol(id_rol);
      setMenu(datos.menu)
  }

  

  const salir = ()=>{
      localStorage.removeItem('usuario');
      window.location.href='/';
  }

    return(
        <>
       
        <div class="container-fluid">
  <div class="row">
    <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="sidebarMenuLabel">Comomomo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
        <ul className="nav flex-column">
                            {menus.map((m)=>(
                                <li className="nav-item">
                                    <Link  className="nav-link active" aria-current="page"  to={m.href}>{m.nombre}</Link>
                                
                                </li>
                            ))}
                                <li className="nav-item">
                                    <Link  className="nav-link active" aria-current="page"  to='../generador'>Generador</Link>
                                
                                </li>
                            <li className="nav-link active"  aria-current="page" >{user}</li>
                            <li><button  class="btn btn-danger" onClick={salir}>Cerrar Session</button></li>
                            </ul>
          
        </div>
      </div>
    </div>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Principal</h1>
        
      </div>

      <h2>Section title</h2>
      <div class="table-responsive small">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>dashboard</td>
              <td>irrelevant</td>
              <td>text</td>
              <td>placeholder</td>
            </tr>
            
            <tr>
              <td>1,010</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div>       
        </>
    )
}