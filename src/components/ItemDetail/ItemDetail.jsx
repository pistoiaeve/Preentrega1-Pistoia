import React, { useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import {AiOutlineArrowLeft} from 'react-icons/ai';
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
      <Card style={{ width: '30rem', height: 'auto', border: '#ed3ca0 solid' }}>
        <Card.Img variant="top" src={imagedescription} />
        <hr/>
        <Card.Body className='cardBody'>
          <Card.Title><h1>{description}</h1></Card.Title>
          <hr/>
          <p>{itemdescription}</p>
          <Card.Text>
            <h3>${price}</h3>
          </Card.Text>
          <ItemCount max={stock} modify={setCounter} cantidad={counter} />
          <Button className='addToCart' onClick={sumarAlCarrito}>Add to cart</Button>
          <hr/>
          <div className='descriptionFooter'> 
          <Button className='goBack' onClick={goBack}><AiOutlineArrowLeft/></Button>
          <Link to='/cart' className='btn btn-dark goCart'><CartWidget/></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
