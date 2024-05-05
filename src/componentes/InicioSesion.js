import { useState } from "react"

export function InicioSesion(){
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")

    return(
        
        <section>
             <h1>Bienvenido administrador</h1>
             <h2>Iniciar sesión</h2>
            <form>
                <input type="text" placeholder="Ingrese su nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                /><br></br>
                <input type="password" placeholder="Ingrese su contraseña"
                value={contraseña}
                onChange={e => setContraseña(e.target.value)}
                /><br></br>
                <button>Iniciar sesión</button>
            </form>
        </section>
    )
}
