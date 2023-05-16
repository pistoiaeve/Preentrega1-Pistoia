import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import {BsFillTrashFill} from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import './CartScreen.css'
import { Link } from 'react-router-dom';



export const CartScreen = () => {

    const{carrito, precioTotal, removerItem, vaciarCarrito}= useContext(CartContext)
  return (
    <div className='cartBody'>
      {
        carrito.length === 0
        ? <>
        <h3> No items on the bag 
          </h3>
          <hr/>
          <Link to='/' className='btn btn-dark link'>Go Home</Link>
          </>
        : <>
        <h1>Ready to checkout?</h1>
        <hr/>
        {
          carrito.map((prod) => (
            <>
            <div className='listado'>
              <img src={prod.image} style={{width:'15rem', height:'auto'}}/>
              <div className='descriptionList'>
              <p>{prod.description}</p>
              <p>${prod.price}</p>
              <p>Units: {prod.counter}</p>
              <Button className='btn btn-dark' onClick={()=> removerItem(prod.id)}>
              <BsFillTrashFill/>
            </Button>
              </div>
            </div>
            </>
          ))
        }
        <hr/>
        <strong>TOTAL: ${precioTotal()}</strong>
        <hr/>
        <Link className='btn btn-dark checkoutBtn' to='/checkout'>Checkout</Link>
        <Button onClick={vaciarCarrito} className='btn btn-dark'>Empty Cart</Button>
        </>
      }
       </div>
  )
}
