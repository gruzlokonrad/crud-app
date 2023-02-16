import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostById, removePost } from '../../redux/postsRedux'
import { Card, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NotFound from './NotFound'

const SinglePost = () => {
  const { postId } = useParams()
  const {
    id,
    title,
    author,
    publishedDate,
    shortDescription,
    content
  } = useSelector(state => getPostById(state, postId)) || {};

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleRemove = id => {
    handleClose()
    dispatch(removePost(id))
    navigate("/");
  }

  const renderModal = () => (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The operation will completely remove this post from the app.
          Are you sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleRemove(id)}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )

  if (!id) return <NotFound />

  return (
    <>
      {showModal && renderModal()}
      <Card className='mx-auto'>
        <Card.Body>
          <header className='d-flex gap-2'>
            <Card.Title style={{ marginRight: 'auto' }}>{title}</Card.Title>
            <Link to={`/post/edit/${id}`}>
              <Button variant="outline-info">Edit</Button>
            </Link>
            <Button variant="outline-danger" onClick={() => setShowModal(true)}>Delete</Button>
          </header>
          <Card.Subtitle className='py-1'>Author: {author}</Card.Subtitle>
          <Card.Subtitle className='py-1'>Published: {publishedDate?.toLocaleDateString()}</Card.Subtitle>
          <Card.Text>{shortDescription}</Card.Text>
          <p dangerouslySetInnerHTML={{ __html: content }} />
          {/* <Button variant="primary" onClick={() => handleRemove(id)}>Read more</Button> */}
        </Card.Body>
      </Card>
    </>
  )
}

export default SinglePost