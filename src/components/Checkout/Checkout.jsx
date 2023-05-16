import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import firebase from 'firebase';
import 'firebase/firestore'
import { getFirestore } from '../../firebase/config';
import Swal from 'sweetalert2';

export const Checkout = () => {

  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

  const[email, setEmail] = useState("")

  const [name, setName] = useState("")

  const[surname, setSurname] = useState("")

  const[phone, setPhone] = useState("")

  const handleSubmit = (e)=>{
  e.preventDefault()

  const orden ={
    buyer:{
      email,
      name,
      surname,
      phone,
    },
    item: carrito,
    total_price: precioTotal(),
    data: firebase.firestore.Timestamp.fromDate(new Date())
  }

  const db = getFirestore()

  const orders= db.collection('orders')

  orders.add(orden)
    .then((res)=>{
      Swal.fire({
        icon: 'success',
        title: 'Your order has been received!',
        text: `Order number: ${res.id}`,
        willClose: ()=>{
          vaciarCarrito()
        }
      })
    })
    .finally(()=> {
      console.log('Order received')
    })

    carrito.forEach((item)=>{
      const docRef = db.collection('productos').doc(item.id)
      docRef.get()
      .then((doc)=>{
        docRef.update({
        stock: doc.data().stock - item.counter
      })})
    })
 
  }

  

  return (
    <div>
        <h3>Contact information</h3>
        <hr/>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="Enter email adress" onChange={(e)=> setEmail(e.target.value)}  value={email}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="First name" onChange={(e)=> setName(e.target.value)}  value={name}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control type="text" placeholder="Last name" onChange={(e)=> setSurname(e.target.value)}  value={surname}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" placeholder=" Phone number" onChange={(e)=> setPhone(e.target.value)}  value={phone}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Suscribe to the newsletter" />
      </Form.Group>
      <Link to='/cart' className='returnCart'><AiOutlineArrowLeft/>Return to cart</Link>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     </div>
  )
}
