import React from 'react';
import articlesData from './articles.json';
import { Card, Col, Container , Row } from 'react-bootstrap';
import './ListArticles.css'; 
import i18n from '../../i18n';
import { Link } from 'react-router-dom';



function ListArticles() {
  //console.log(i18n.language);

  const filtred = articlesData.filter((article) => article.lng === i18n.language);
  return (
    <Container style={{height:'100vh'}} className='mt-2'>
    <Row md={12}>
    {filtred.map((article) => (
      <Col md={4} sm={12}>
      <Card className='card-animation' key={article.id} style={{ width: '100%',margin:"20px" }}>
        <Card.Img variant="top" src={article.photo} alt={article.titre} />
        <Card.Body>
          <Card.Title>{article.titre}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
          <Link to={`/article/${article.id}`} className="btn btn-primary">Read More</Link>
        </Card.Body>
      </Card>
        </Col>
  
    ))}
    </Row>
  </Container>
  );
}

export default ListArticles;