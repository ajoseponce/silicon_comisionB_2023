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

export async function getFabricantes(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
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

export async function getTiposEquipos(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/tipos_equipo`, Options)
    const data= await respuesta.json();
    return data
}


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

export async function getMenuByRol(id_rol){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/menu/${id_rol}`, Options)
    const data= await respuesta.json();
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