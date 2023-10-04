const URL ='http://localhost:2023';

//esta es mi funcion para loguearme
export async function Login(datos){
    
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/login`, Options);
    const data= await respuesta.json();
    return data
}

//esta es mi funcion es para validar el nick
export async function ValidarNick(dato){
    
    const Options={
        method:'POST',
        body: JSON.stringify(dato),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/validarnick`, Options);
    const data= await respuesta.json();
    console.log('respuesta', data)
    return data
}

//esta es mi funcion para loguearme
export async function Registro(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/registro`, Options)
    const data= await respuesta.json()
    return data
}


export async function getUsuariosByID(id_usuario){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/usuarios/${id_usuario}`, Options)
    const data= await respuesta.json();
    return data[0];
}

export async function getMenuByRol(id_rol){
    const token = JSON.parse(localStorage.getItem('token'));
   const Options={
       method:'GET',
       headers: {
           'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
       }
   }
   const respuesta = await fetch(`${URL}/menu/${id_rol}`, Options)
   const data= await respuesta.json();
   return data;
}


export async function ver_permisos(datos){
    const token = JSON.parse(localStorage.getItem('token'));
   const Options={
       method:'POST',
       body: JSON.stringify(datos),
       headers: {
           'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
       }
   }
   const respuesta = await fetch(`${URL}/menu_permisos`, Options)
   const data= await respuesta.json();
   console.log('respuesta de permisos', data)
   return data;
}



// Inicio de fabricantes

export async function getFabricantes(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/fabricantes`, Options)
    const data= await respuesta.json()

    return data
}

export async function getFabricantesByID(id_fabricante){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/fabricantes/${id_fabricante}`, Options)
    const data= await respuesta.json();
    return data[0];
}

export async function deleteFabricante(id_fabricante){
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/fabricantes/${id_fabricante}`, Options)
    
}

export async function ActualizarEstadoFabricante(id_fabricante, actulizar){
    const Options={
        method:'DELETE',
        body: JSON.stringify(actulizar),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/fabricantes/${id_fabricante}`, Options)
    const data= await respuesta.json()
    return data;
}

export async function AddFabricante(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/fabricantes`, Options)
    const data= await respuesta.json()
    return data;
}


export async function EditFabricante(datos, id_fabricante){
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/fabricantes/${id_fabricante}`, Options)
    const data= await respuesta.json()
    return data;
}

// fin de fabricantes

// inicio de modelos
export async function getModelos(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/modelos`, Options)
    const data= await respuesta.json();
    return data
}

export async function deleteModelo(id_modelo){
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/modelos/${id_modelo}`, Options)
    const data= await respuesta.json()
    return data;
}

export async function AddModelo(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/modelos`, Options)
    const data= await respuesta.json()
    return data;
}

// fin de  modelos


// inicion de tipos de equipo
export async function getTiposEquipos(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/tipos_equipo`, Options)
    const data= await respuesta.json();
    return data
}

export async function getTipoEquipoByID(id_tipo_equipo){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/tipos_equipo/${id_tipo_equipo}`, Options)
    const data= await respuesta.json();
    return data[0];
}

export async function EditTipoEquipo(datos, id_tipo_equipo){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/tipos_equipo/${id_tipo_equipo}`, Options)
    const data= await respuesta.json()
    return data;
}

export async function ActualizarEstadoTipoEquipo(id_tipo_equipo, actualizar){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'DELETE',
        body: JSON.stringify(actualizar),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/tipos_equipo/${id_tipo_equipo}`, Options)
    const data= await respuesta.json()
    return data;
}

export async function AddTipoEquipo(datos){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/tipos_equipo`, Options)
    const data= await respuesta.json()
    return data;
}

// fin de tipo de equipos


// inicio de equipos
export async function getEquipos(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/equipos`, Options)
    const data= await respuesta.json()
    return data
}
export async function AddEquipo(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/equipos`, Options)
    const data= await respuesta.json()
    return data;
}


export async function EditEquipo(datos, id_equipo){
    console.log(datos)
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/equipos/${id_equipo}`, Options)
    const data= await respuesta.json()
    return data;
}

export async function ActualizarEstadoEquipo(id_equipo, actualizar){
    const Options={
        method:'PUT',
        body: JSON.stringify(actualizar),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/cambiar_estado_equipos/${id_equipo}`, Options)
    const data= await respuesta.json()
    return data;
}


export async function getEquipoByID(id_equipo){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/equipos/${id_equipo}`, Options)
    const data= await respuesta.json();
    console.log(data[0])
    return data[0];
}

// fin de equipos

//inicio de ubicaciones
export async function getUbicaciones(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/ubicaciones`, Options)
    const data= await respuesta.json();
    return data
}

export async function AddUbicacion(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/ubicaciones`, Options)
    const data= await respuesta.json()
    return data;
}

export async function getUbicacionesByID(id_ubicacion){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/ubicaciones/${id_ubicacion}`, Options)
    const data= await respuesta.json();
    return data[0];
}
export async function EditUbicacion(datos, id_ubicacion){
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/ubicaciones/${id_ubicacion}`, Options)
    const data= await respuesta.json()
    return data;
}

export async function ActualizarEstadoUbicacion(id_ubicacion, actulizar){
    const Options={
        method:'DELETE',
        body: JSON.stringify(actulizar),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/ubicaciones/${id_ubicacion}`, Options)
    const data= await respuesta.json()
    return data;
}

// fin de ubicaciones

// inicio usuarios

export async function getUsuarios(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/usuarios`, Options)
    const data= await respuesta.json();
    return data
}

export async function ActualizarEstadoUsuario(id_usuario, actualizar){
    const Options={
        method:'DELETE',
        body: JSON.stringify(actualizar),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/usuarios/${id_usuario}`, Options)
    const data= await respuesta.json()
    return data;
}
export async function ResetUsuariosByID(id_usuario){
    const Options={
        method:'PUT',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/resetpass/${id_usuario}`, Options)
    const data= await respuesta.json()
    return data;
}