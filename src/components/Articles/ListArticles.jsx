import React, { useEffect, useState } from 'react';
import articlesData from './articles.json';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ListArticles.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ListArticles() {
  const { i18n } = useTranslation();
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const filteredData = articlesData.filter((article) => article.lng === i18n.language);
    setFilteredArticles(filteredData);
  }, [i18n.language]);

  return (
    <Container style={{ height: '100%' }} className='mt-2'>
      <Row md={12}>
        {filteredArticles.map((article) => (
          <Col md={4} xs={12} sm={12} key={article.id}>
            <div className='card-container'>
              <Card className='card-animation mb-4' >
                <div className='card-image-container'>
                  <Card.Img
                    variant='top'
                    src={require(`./images${article.photo}`).default}
                    alt={article.titre}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{article.titre}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <Link to={`/article/${article.id}`} className='btn btn-primary'>
                    Read More
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ListArticles;
