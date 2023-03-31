import React from 'react'
import { Card } from 'react-bootstrap'

export default function Product(props) {
    const {data} = props
  return (
    <div>
      <div className='bg-secondary bg-opacity-25 product' id='products'>
    <div>
        <h3 className='text-center fw-bold fs-1 p-5'>Our Products</h3>
    </div>

    <div className='mx-5'>
        {
            data.length !== 0 ?
            <div className='row'>
                {data.map((item,index) => {
                        return <div key={item.id}>
                            <Card>
                                <Card.Img variant="top" src={item.imageURL} />
                                <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>{item.price}</Card.Text>
                                <Card.Text>{item.quantity? item.quantity : "Out of Stock"}</Card.Text>
                                {/* <Button variant="primary">item.quantity? "Buy Now!": "Sold out!"</Button> */}
                                </Card.Body>
                            </Card>
                        </div>
                    })}
            </div> : 
            <div>
                <p>Not Found !</p>
            </div>
        }
    </div>
      </div>
    </div>
  )
}
