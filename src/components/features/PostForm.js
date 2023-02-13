import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';

const PostForm = (
  {
    action,
    actionText,
    data = {
      title: '',
      author: '',
      publishedDate: '',
      shortDescription: '',
      mainContent: '',
    }
  }
) => {
  const [formData, setFormDate] = useState(data);
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setValidated(true)
      action(formData)
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
          value={formData.title}
          onChange={e => setFormDate({ ...formData, title: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          value={formData.author}
          onChange={e => setFormDate({ ...formData, author: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date published</Form.Label>
        <Form.Control
          type="data"
          placeholder="Enter date published"
          value={formData.publishedDate}
          onChange={e => setFormDate({ ...formData, publishedDate: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter description"
          rows={2}
          value={formData.shortDescription}
          onChange={e => setFormDate({ ...formData, shortDescription: e.target.value })}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Main content</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter post"
          rows={8}
          value={formData.mainContent}
          onChange={e => setFormDate({ ...formData, mainContent: e.target.value })}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {actionText}
      </Button>
    </Form>
  )
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  data: PropTypes.object,
}

export default PostForm