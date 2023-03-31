import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import ProductsArray from './productsArray';

export default function Search() {
    let [word,setWord] = useState("");
    let getSearchValue = (e) => {
        setWord(e.target.value);
    }
    // console.log(word);
    const filteredData = ProductsArray.filter(product => {
        const searchQuery = word.toLowerCase();
        const productName = product.name.toLowerCase();
        const productDescription = product.description.toLowerCase();
        return(
            productName.includes(searchQuery) || productDescription.includes(searchQuery)
            );
        })
        return (
          <div className="container mt-4 mb-4">
            <Form>
            <Form.Group className="mb-3">
              <Form.Label>Search</Form.Label>
              <Form.Control type="text" placeholder="Enter search word" onChange={getSearchValue} />
            </Form.Group>
          </Form>

        <Row>
               {filteredData.map((item) => {
                // console.log(item)
                
                return (
                    
                <Col md={4} className='mb-4 mt-4' key={item.id}>
                <Card style={{ width: '18rem' }} className='item'>
                <Card.Img variant="top" src={item.imageURL} />
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{ item.price }</Card.Text>
                <Card.Text>{ item.quantity? item.quantity : "Out of stack" }</Card.Text>
                <Card.Text>{ item.description }</Card.Text>
                <Button variant="primary">{item.quantity? "Buy Now!" : "Solid out"}</Button>
                </Card.Body>
                </Card>
                </Col>)
              })}
</Row>
          </div>
        )
        //   return (
        //     <div>
        //       {filteredArticles.map(article => (
        //         <div key={article.id}>
        //           <h3>{article.title}</h3>
        //           <p>{article.content}</p>
        //           <p>{article.tags.join(', ')}</p>
        //         </div>
        //       ))}
        //     </div>
        //   );

//       const filteredArticles = articles.filter(article => {
//     const searchQuery = data.toLowerCase();
//     const articleTitle = article.title.toLowerCase();
//     const articleTags = article.tags.map(tag => tag.toLowerCase());

//     return (
//       articleTitle.includes(searchQuery) ||
//       articleTags.some(tag => tag.includes(searchQuery))
//     );
//   });

// }
// This component takes an array of articles and filters them based on whether the search query matches any of the article titles or tags. If a match is found, the article is displayed. Note that this implementation performs a case-insensitive search by converting both the search query and the article data to lowercase.


//       let getvalue = (e) => {
//     setInput(e.target.value);
//   }
//     console.log(inputvalue)
//   return (
//     <div className="container">
//       <Form.Control
//         type="text"
//         placeholder="search"
//         onChange={getvalue}
//       />
//       <br />
//       <Artecle data={inputvalue} />
//     </div>
//   );

//       let getvalue = (e) => {
//     setInput(e.target.value);
//   }
//     console.log(inputvalue)
//   return (
//     <div className="container">
//       <Form.Control
//         type="text"
//         placeholder="search"
//         onChange={getvalue}
//       />
//       <br />
//       <Artecle data={inputvalue} />
//     </div>
//   );

}
