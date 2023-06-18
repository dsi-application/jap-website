import React from 'react';
import articlesData from './articles.json';
import { Card, Container } from 'react-bootstrap';


function ListArticles() {
  return (
    <Container>
    {articlesData.map((article) => (
      <Card key={article.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={article.photo} alt={article.titre} />
        <Card.Body>
          <Card.Title>{article.titre}</Card.Title>
          <Card.Text>{article.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </Container>
  );
}

export default ListArticles;
