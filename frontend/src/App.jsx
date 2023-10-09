
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
import { EditEquipo } from './componentes/equipos/EditEquipo'
import { AddEquipo } from './componentes/equipos/AddEquipo'
import { Ubicaciones } from './componentes/ubicaciones/Ubicaciones'
import { Usuarios } from './componentes/usuarios/Usuarios'
import { TipoEquipo } from './componentes/tipo_equipo/tipo_equipo'
import { GenPdf } from './GenPdf'


function App() {

  return (
    <>
     
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/principal' element={<Principal/>}></Route>
        <Route path='/registro' element={<Registro/>}></Route>
        <Route path='/equipos' element={<Equipos/>}></Route>
        <Route path='/fabricantes' element={<Fabricantes/>}></Route>
        <Route path='/ubicaciones' element={<Ubicaciones/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
        <Route path='/modelos' element={<Modelos/>}></Route>
        <Route path='/tipos_equipos' element={<TipoEquipo/>}></Route>
        <Route path='/agregarfabricante' element={<AddFabricante/>}></Route>
        <Route path='/agregarequipo' element={<AddEquipo/>}></Route>
        <Route path='/agregarmodelo' element={<AddModelo/>}></Route>
        <Route path='/editfabricante/:id_fabricante' element={<EditFabricante/>}></Route>
        <Route path='/editequipo/:id_equipo' element={<EditEquipo/>}></Route>

        <Route path='/generador' element={<GenPdf/>}></Route>
      </Routes>
      
      
     
    </>
  )
}

export default App
