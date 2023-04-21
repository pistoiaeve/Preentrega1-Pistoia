import React from 'react'

export const Item = ({id, description, price, image}) => {
  return (
    <div>
        <h3>Id:{id}</h3>
        <p>Description:{description}</p>
        <p>Precio:${price}</p>
        <img src={image} alt={image} />
    </div>
  )
}
