import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import './itemdetailstyles.css'

export const ItemDetail = ({id, description, price, image, itemdescription,  category, imagedescription}) => {
  return (
    <div className='cardDescription'>
       <Card style={{ width: '30rem', height:'68rem' , border:'#ed3ca0 solid'}}>
      <Card.Img variant="top" src={imagedescription} />
      <Card.Body className='cardBody'> 
        <Card.Title><h1>{description}</h1></Card.Title>
        <p>{itemdescription}</p>
        <Card.Text>
          <h3>${price}</h3>
        </Card.Text>
        <ItemCount/>
        <Button className='addToCart'variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
