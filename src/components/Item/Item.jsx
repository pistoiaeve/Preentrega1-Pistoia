import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './itemstyles.css'

export const Item = ({id, description, price, image, category}) => {
  return (
    <div>
       <Card className='cardCat' style={{ width: '30rem', height:'54rem'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
      <Card.Title><p>{id}</p></Card.Title>
        <Card.Title><h1>{description}</h1></Card.Title>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          ${price}
        </Card.Text>
        <Link to={`/detail/${id}`}>
        <Button variant="primary">See more</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}
