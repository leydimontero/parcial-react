import React, { useState } from 'react'
import Card from './Card'
import {input, button, label} from './Formulario.module.css'

const Formulario = () => {
    const [user, setUser] = useState({
        nombre: '',
        animal: ''
    })
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 && user.animal.length > 6){
            setShow(true)
            setError(false)
        } else{
            setError(true)
        }
    }
  return (
    <div >
       {!show && 
            <form onSubmit={handleSubmit} >
                <label className={label}>Nombre</label>
                <input className= {input} type="text" value={user.nombre} onChange={(event) => setUser({...user, nombre: event.target.value.trimStart()})}/>
                <label className={label}>Animales Favoritos</label>
                <input className= {input} type="text" value={user.animal} onChange={(event) => setUser({...user, animal: event.target.value.trimStart()})}/>
                <button className={button}>Enviar</button>
            </form>
        }
        {show ? 
            <Card nombre={user.nombre} animal={user.animal}/>
        :
            null
        }
        {error && <h5 style={{color: 'red'}}>Por favor chequea que la información sea correcta.</h5>}

    </div>
  )
}

export default Formulario
