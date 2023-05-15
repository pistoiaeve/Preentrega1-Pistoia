import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {BsFillTrashFill} from 'react-icons/bs';
import { CartContext } from '../context/CartContext';



export const CartScreen = () => {

    const{carrito, precioTotal, removerItem}= useContext(CartContext)
  return (
    <div className='container'>
    {
      carrito.map((prod) => (
        <>
        <div className='listado'>
          <p>{prod.description}</p>
          <p>${prod.price}</p>
          <p>Cantidad: {prod.counter}</p>
        </div>
        <Button onClick={()=> removerItem(prod.id)}>
          <BsFillTrashFill/>
        </Button>
        </>
      ))
    }
    <hr/>
    <strong>TOTAL: ${precioTotal()}</strong>
    </div>
  )
}
