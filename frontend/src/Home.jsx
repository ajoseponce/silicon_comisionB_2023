import React, { useEffect } from "react";

import { Link } from "react-router-dom";
// import './Home.css'
export function Home(){

  useEffect(()=>{
    const datos_usuario = JSON.parse(localStorage.getItem('usuario'));

    if(datos_usuario){
        window.location.href='/principal';
        return;
    }
    
},[])

    return(
        <>
        
          <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header class="mb-auto">
              <div>
                <h3 class="float-md-start mb-0">Cover</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                  <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href=""><Link to="/">Home</Link></a>
                  <a class="nav-link fw-bold py-1 px-0"><Link to="/login">Login</Link></a>
                  <a class="nav-link fw-bold py-1 px-0"><Link to="/registro">Registro</Link></a>
                </nav>
              </div>
            </header>

            <main class="px-3">
              <h1>Cover your page.</h1>
              <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
              <p class="lead">
                <a href="#" class="btn btn-lg btn-light fw-bold border-white bg-white">Learn more</a>
              </p>
            </main>

            <footer class="mt-auto text-white-50">
              <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
            </footer>
          </div>
        </>
    )
}