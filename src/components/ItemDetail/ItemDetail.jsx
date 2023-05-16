import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './itemdetailstyles.css'

export const ItemDetail = ({ id, name, description, price, image, itemdescription, category, imagedescription, stock }) => {

  const navigate = useNavigate()

  const goBack = () => {

    navigate(-1)

  }

  const [counter, setCounter] = useState(0)

  const sumarAlCarrito = () => {
    const newItem = {
      id,
      name,
      description,
      image,
      price,
      category,
      counter
    }
    addToCart(newItem)
  }
  const { addToCart } = useContext(CartContext)



  return (
    <div className='cardDescription'>
      <Card style={{ width: '30rem', height: '68rem', border: '#ed3ca0 solid' }}>
        <Card.Img variant="top" src={imagedescription} />
        <Card.Body className='cardBody'>
          <Card.Title><h1>{description}</h1></Card.Title>
          <p>{itemdescription}</p>
          <Card.Text>
            <h3>${price}</h3>
          </Card.Text>
          <ItemCount max={stock} modify={setCounter} cantidad={counter} />
          <Button className='addToCart' onClick={sumarAlCarrito}>Add to cart</Button>
          <Button className='goBack' onClick={goBack}>GO BACK</Button>
          <Link to='/cart' className='btn btn-dark'>Cart</Link>
        </Card.Body>
      </Card>
    </div>
  )
}
