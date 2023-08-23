import { useState } from 'react'

import './App.css'
import { Home } from './Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { Principal } from './Principal'
import { Registro } from './Registro'
import { Equipos } from './Equipos'
import { Fabricantes } from './Fabricantes'
import { Modelos } from './Modelos'

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
      </Routes>
    </>
  )
}

export default App
