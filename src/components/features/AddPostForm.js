import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../redux/postsRedux';
import shortid from 'shortid';

const AddPostForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [validated, setValidated] = useState(false);
  const [formDate, setFormDate] = useState({
    title: '',
    author: '',
    publishedDate: '',
    shortDescription: '',
    mainContent: '',
  })

  const clearForm = () => setFormDate({
    title: '',
    author: '',
    publishedDate: '',
    shortDescription: '',
    mainContent: '',
  })

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setValidated(true)
      dispatch(addPost({...formDate, id: shortid()}))
      clearForm()
      console.log('sent')
      navigate("/");
    }
  }

  return (
    <Form validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={formDate.title}
          onChange={e => setFormDate({ ...formDate, title: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          value={formDate.author}
          onChange={e => setFormDate({ ...formDate, author: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date published</Form.Label>
        <Form.Control
          type="data"
          placeholder="Enter date published"
          value={formDate.publishedDate}
          onChange={e => setFormDate({ ...formDate, publishedDate: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter description"
          rows={2}
          value={formDate.shortDescription}
          onChange={e => setFormDate({ ...formDate, shortDescription: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter post"
          rows={8}
          value={formDate.mainContent}
          onChange={e => setFormDate({ ...formDate, mainContent: e.target.value })}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default AddPostForm