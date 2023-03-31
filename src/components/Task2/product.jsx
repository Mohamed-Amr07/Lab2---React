import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import data from "./productsArray"
export default function Product() {
    const product = data.map((item,index) => {
      return(
      <Col md={4} className='mb-4 mt-4' key={index+1}>
        <Card style={{ width: '18rem' }} className='item'>
      <Card.Img variant="top" src={item.imageURL} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{ item.price }</Card.Text>
        <Card.Text>{ item.quantity? item.quantity : "Out of stack" }</Card.Text>
        <Card.Text>{ item.description }</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>)
        })
  return (
    <div>
        <h1>Our Products</h1>
        <Row className='m-5 container'>
        {product}
      </Row>
    </div>
  )
}