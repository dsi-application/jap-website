import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AddArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState(null);
  const [lng, setLng] = useState('');
  const [dropdown, setDropdown] = useState('Select Language');

  const handleLanguageChange = (value) => {
    setLng(value);
     setDropdown(value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('lng', lng);
    formData.append('titre', title);
    formData.append('content', content);
    formData.append('description', description);
    formData.append('photo', picture);
    

    try {
      const response = await axios.post('http://localhost:3002/articles', formData);
      console.log('Article added:', response.data);
      // Perform any additional actions or show success message
    } catch (error) {
      console.error('Error adding article:', error);
      // Show error message or handle the error
    }
  };

  return (
    <div
      style={{
        display: 'block',
        width: 700,
        padding: 30,
        margin: '40px auto',
      }}
    >
      <h4>Add Article</h4>
      <Form onSubmit={handleSubmit}>
      <DropdownButton id="dropdown-basic" title={dropdown} onSelect={handleLanguageChange}>
  <Dropdown.Item eventKey="fr">FR</Dropdown.Item>
  <Dropdown.Item eventKey="en">EN</Dropdown.Item>
  <Dropdown.Item eventKey="ar">AR</Dropdown.Item>
</DropdownButton>

        <Form.Group>
          <Form.Label>Enter Title:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {setTitle(e.target.value) }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Content:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Description:</Form.Label>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter Picture:</Form.Label>
          <Form.Control type="file" onChange={(e) => setPicture(e.target.files[0])} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddArticle;
