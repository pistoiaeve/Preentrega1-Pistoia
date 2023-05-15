import React, { useContext } from 'react'
import { CgShoppingCart } from 'react-icons/cg';
import { CartContext } from '../context/CartContext';
import './stylescart.css'

export const CartWidget = () => {
  const{calcularCantidad} = useContext(CartContext)
  return (
    <div>
      <span>{calcularCantidad()}</span>
      <CgShoppingCart className='cart' size={25}/>
    </div>

  )
}
