import React from 'react';
import {
    Container,
    Row,
    Card,
    Col,
    CardDeck,
  } from 'react-bootstrap';
import Zoom from 'react-reveal/Fade';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


import articlesData from './articles.json';
import i18n from '../../i18n';


function Article() {
    const { id } = useParams();
    const [articleData, setArticleData] = React.useState(null);
    
    useEffect(() => {
        console.log(id);
        const data= articlesData.find((article) => article.id === id);
        console.log(data);
        setArticleData(data);

        }, []);
   
    

  

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
    <Container style={{ height: '100%', marginBottom:"50px" }}>
      {/* <Row className='text-center font-weight-bolder my-2' style={{ textColor: '#001689' }}>
        <Col>
          <h2>{articleData.titre}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{articleData.description}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{articleData.content}</p>
        </Col>
      </Row>
      <Row>
        <Col>
        
        <img src={articleData.photo} style={{ width: '100%', height: '100%' }} alt='pic'/>
        </Col>
      </Row> */}
{/* =========================================================================================================================== */}
<Row className="justify-content-md-center">
        <CardDeck className='card-deck mb-4'>
          <Zoom cascade>
            <Col xs="12" lg="12">
              <Card border='primary' style={{ height: "100%", width: "100%" }}>
                 <Card.Body className="main">
                <Card.Title className='title' color='#001689'> {articleData.titre} </Card.Title>
                <Card.Text className={i18n.language === "ar" ? "text-right" : "text-left"}>
                {/* {articleData.content} */}
                <div>
        <p>{formatContent(articleData.content)}</p>
        {/* {articleData.content.length > MAX_CHARACTERS && (
          <button>Show more</button>
        )} */}
      </div>
                </Card.Text>
                
                <Card.Img style={{ height: 550, width:"100%" }} variant="top" src={require(`./images${articleData.photo}`).default} />
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
