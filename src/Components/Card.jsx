import React from 'react'

const Card = ({nombre, animal}) => {
    
  return (
    <div>
      <h3 style={{color: 'rgb(208, 71, 236)'}}>Hola, {nombre}!</h3>
      <h3 style={{color: 'rgb(208, 71, 236)'}}>sabemos que tus animales favoritos son: {animal}</h3>
    </div>
  )
}

export default Card
