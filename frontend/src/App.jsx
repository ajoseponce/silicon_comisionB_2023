import { useState } from 'react'

import './App.css'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'

import { Login } from './Login'
import { Principal } from './Principal'
import { Registro } from './Registro'

import { Fabricantes } from './componentes/fabricantes/Fabricantes'
import { Equipos } from './componentes/equipos/Equipos'
import { Modelos } from './componentes/modelos/Modelos'
import { AddFabricante } from './componentes/fabricantes/AddFabricante'
import { AddModelo } from './componentes/modelos/AddModelo'
import { EditFabricante } from './componentes/fabricantes/EditFabricante'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/principal' element={<Principal/>}></Route>
        <Route path='/registro' element={<Registro/>}></Route>
        <Route path='/equipos' element={<Equipos/>}></Route>
        <Route path='/fabricantes' element={<Fabricantes/>}></Route>
        <Route path='/modelos' element={<Modelos/>}></Route>
        <Route path='/agregarfabricante' element={<AddFabricante/>}></Route>
        <Route path='/agregarmodelo' element={<AddModelo/>}></Route>
        <Route path='/editfabricante/:id_fabricante' element={<EditFabricante/>}></Route>
      </Routes>
    </>
  )
}

export default App
