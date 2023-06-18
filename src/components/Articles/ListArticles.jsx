import React from 'react';
import articlesData from './articles.json';
import { Card, Col, Container , Row } from 'react-bootstrap';
import './ListArticles.css'; 


function ListArticles() {
  return (
    <Container className='d-flex justify-content-center'>
    <Row md={12}>
    {articlesData.map((article) => (
      <Col md={4} sm={12}>
      <Card className='card-animation' key={article.id} style={{ width: '100%',margin:"20px" }}>
        <Card.Img variant="top" src={article.photo} alt={article.titre} />
        <Card.Body>
          <Card.Title>{article.titre}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
      </Card>
        </Col>
  
    ))}
    </Row>
  </Container>
  );
}

export default ListArticles;
