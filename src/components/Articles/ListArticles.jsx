import React, { useEffect } from 'react';
import articlesData from './articles.json';
import { Card, Col, Container , Row } from 'react-bootstrap';
import './ListArticles.css'; 
import i18n from '../../i18n';
import { Link } from 'react-router-dom';



function ListArticles() {
  //console.log(i18n.language);
  const [filtred,setFiltred]=React.useState([]);
  //const [data,setData]=React.useState([]);
  useEffect(() => {
    
    const data = articlesData.filter((article) => article.lng === i18n.language);
    setFiltred(data);
    console.log(i18n);
    }, [i18n]);
  //const filtred = articlesData.filter((article) => article.lng === i18n.language);

  return (
    <Container style={{height:'100%'}} className='mt-2'>
    <Row md={12}>
    {filtred.map((article) => (
      <Col md={4} xs={12} sm={12}>
      <Card className='card-animation' key={article.id} style={{ width: '100%',margin:"15px" }}>
        <Card.Img variant="top" src={require(`./images${article.photo}`).default} alt={article.titre} />
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