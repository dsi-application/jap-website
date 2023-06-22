import React, { useEffect, useState } from 'react';
import {
  Container,
  Row,
  Card,
  Col,
  CardDeck,
} from 'react-bootstrap';
import Zoom from 'react-reveal/Fade';
import { useParams } from 'react-router-dom';
import i18n from '../../i18n';
import axios from 'axios';

function Article() {
  const { id } = useParams();
  const [articleData, setArticleData] = useState(null);
  const url = process.env.REACT_APP_API_URL; // Access the environment variable


  useEffect(() => {
    axios
      .get(`${url}/articles/${id}`)
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  if (!articleData) {
    return <div style={{ height: '100vh' }}>Article not found</div>;
  }

  const formatContent = (content) => {
    const paragraphs = content.split('.');

    return paragraphs.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
  };

  return (
    <>
      <Container style={{ height: '100%', marginBottom: '50px' }}>
        {/* =========================================================================================================================== */}
        <Row className="justify-content-md-center">
          <CardDeck className="card-deck mb-4">
            <Zoom cascade>
              <Col xs="12" lg="12">
                <Card border="primary" style={{ height: '100%', width: '100%' }}>
                  <Card.Body className="main">
                    <Card.Title className="title" color="#001689">
                      {articleData.titre}
                    </Card.Title>
                    <Card.Text className={i18n.language === 'ar' ? 'text-right' : 'text-left'}>
                      <div>
                        <p>{formatContent(articleData.content)}</p>
                      </div>
                    </Card.Text>
                    <Card.Img
                      style={{ height: 550, width: '100%' }}
                      variant="top"
                      src={`${articleData.photo}`}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Zoom>
          </CardDeck>
        </Row>
      </Container>
    </>
  );
}

export default Article;
