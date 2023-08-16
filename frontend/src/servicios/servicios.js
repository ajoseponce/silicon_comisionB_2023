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
    const respuesta = await fetch(`${URL}/login`, Options)
    const data= await respuesta.json()
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
    console.log(data)
    return data
}