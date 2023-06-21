import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ListArticles.css';
import i18n from '../../i18n';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom/cjs/react-router-dom';

import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';


function ListArticles() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);
  const url = 'http://localhost:3002';

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [deleteA, setDeleteA] = useState(false);

  useEffect(() => {
    const myParamValue = queryParams.get("deleteA");
    if (myParamValue === "ok") {
      setDeleteA(true);
    }
  });

  const deleteArticle = async (id) => {
    try {
      const response = await axios.delete('http://localhost:3002/articles/'+id);
      setArticles(
          articles.filter(  article=>
            article._id!==id
          ));
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

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

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container style={{ height: '100%' }} className='mt-2'>
      <Row md={12}>
        {currentArticles.map((article) => (
          <Col md={4} xs={12} sm={12} key={article._id}>
            <Card className='card-animation' style={{ width: '100%', margin: '15px' }}>
              <Card.Img variant='top' src={`${url}/uploads/${article.photo}`} alt={article.titre} />
              <Card.Body>
                <Card.Title>{article.titre}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Link to={`/article/${article._id}`} className='btn btn-primary'>
                  Read More
                </Link>
                {
                  deleteA && <button className="btn btn-sm btn-danger" onClick={
                   ()=> deleteArticle(article._id)
                  }>Remove</button>
                }
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {totalPages > 1 && (
        <Container>
          <Row>
            <Col className='pagination-container'>
              <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
}

export default ListArticles;
