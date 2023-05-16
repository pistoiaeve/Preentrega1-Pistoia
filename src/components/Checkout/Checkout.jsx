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
import './Checkout.css'

export const Checkout = () => {

  const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

  const[email, setEmail] = useState("")

  const [name, setName] = useState("")

  const[surname, setSurname] = useState("")

  const[phone, setPhone] = useState("")

  const[newsletter, setNewsletter] = useState(false)

  function switchNewsletter(){
    setNewsletter(!newsletter)
  }

  const handleSubmit = (e)=>{
  e.preventDefault()

  const orden ={
    buyer:{
      email,
      name,
      surname,
      phone,
      newsletter,
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
        color: 'black', 
        customClass: 'swalNoti',
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
    <div className='checkoutInfo'>
        <h1>Contact information</h1>
        <hr/>
        <Form onSubmit={handleSubmit} className='formSubmit'>
      <Form.Group className="mb-3" >
        <Form.Control type="email" placeholder="Enter email adress" onChange={(e)=> setEmail(e.target.value)}  value={email}/>
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
        <Form.Check type="checkbox" label="Suscribe to the newsletter" onChange={switchNewsletter}  value={newsletter}/>
      </Form.Group>
      <div className='formFooter'>
      <Link to='/cart' className='returnCart'><AiOutlineArrowLeft/>Return to cart</Link>
      <Button variant="primary" type="submit" className='submitButton'>
        Submit
      </Button>
      </div>
    </Form>
     </div>
  )
}
