import React from 'react'
import { CgShoppingCart } from 'react-icons/cg';
import './stylescart.css'

export const CartWidget = () => {
  return (
    <div>
      <CgShoppingCart className='cart' size={20}/>
    </div>

  )
}
