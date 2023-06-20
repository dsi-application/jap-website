import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ListArticles.css';
import i18n from '../../i18n';
import { Link } from 'react-router-dom';

function ListArticles() {
  const [articles, setArticles] = useState([]);
  const url = 'http://localhost:3002';

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('http://localhost:3002/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const filteredArticles = articles.filter((article) => article.lng === i18n.language);

  return (
    <Container style={{ height: '100%' }} className='mt-2'>
      <Row md={12}>
        {filteredArticles.map((article) => (
          <Col md={4} xs={12} sm={12}>
            <Card className='card-animation' key={article._id} style={{ width: '100%', margin: '15px' }}>
              <Card.Img variant='top' src={`${url}/uploads/${article.photo}`} alt={article.titre} />
              <Card.Body>
                <Card.Title>{article.titre}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Link to={`/article/${article._id}`} className='btn btn-primary'>
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListArticles;
