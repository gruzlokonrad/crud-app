import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import DatePicker from "react-datepicker";
import { useForm } from 'react-hook-form';

import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";

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
      content: '',
    }
  }
) => {
  const [formData, setFormDate] = useState(data);
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const handleSubmit = () => {
    setContentError(!formData.content)
    setDateError(!formData.publishedDate)
    if (formData.content && formData.publishedDate) {
      action(formData)
      navigate("/");
    }
  }

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={formData.title}
          {...register("title", {
            required: true,
            min: 3,
            onChange: e => setFormDate({ ...formData, title: e.target.value })
          })}
        />
        {
          errors.title &&
          <small className="d-block form-text text-danger mt-2">
            This field is required
          </small>
        }
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter author"
          value={formData.author}
          {...register("author", {
            required: true,
            min: 3,
            onChange: e => setFormDate({ ...formData, author: e.target.value })
          })}
        // onChange={() => setFormDate({ ...formData, author: register('author').onChange })}
        />
        {
          errors.author &&
          <small className="d-block form-text text-danger mt-2">
            This field is required (min. 3 characters)
          </small>
        }
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicData">
        <Form.Label>Date published</Form.Label>
        <DatePicker
          selected={formData.publishedDate}
          onChange={date => setFormDate({ ...formData, publishedDate: date })}
        />
        {
          dateError &&
          <small className="d-block form-text text-danger mt-2">
            This field is required
          </small>
        }
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicShortDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter description"
          rows={2}
          value={formData.shortDescription}
          {...register("shortDescription", {
            required: true,
            min: 20,
            onChange: e => setFormDate({ ...formData, shortDescription: e.target.value })
          })}
        />
        {
          errors.shortDescription &&
          <small className="d-block form-text text-danger mt-2">
            This field is required (min. 20 characters)
          </small>
        }
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContent">
        <Form.Label>Main content</Form.Label>
        <ReactQuill
          theme="snow"
          value={formData.content}
          placeholder='Enter post'
          onChange={content => setFormDate({ ...formData, content: content })}
        />
        {
          contentError &&
          <small className="d-block form-text text-danger mt-2">
            This field is required
          </small>
        }
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