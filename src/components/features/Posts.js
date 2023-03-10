import React from 'react'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/postsRedux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posts = ({ data }) => {
  let posts = useSelector(getAllPosts);

  if (data) {
    posts = data
  }

  return (
    <Row xs={1} sm={2} lg={3} xxl={4} className='gy-3 my-3'>
      {posts.map(({ id, title, author, publishedDate, category, shortDescription }, index) => (
        <Col key={index}>
          <Card className='mx-auto'>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className='py-1'>Author: {author}</Card.Subtitle>
              <Card.Subtitle className='py-1'>Published: {publishedDate.toLocaleDateString()}</Card.Subtitle>
              <Card.Subtitle className='py-1'>Category: {category}</Card.Subtitle>
              <Card.Text>{shortDescription}</Card.Text>
              <Link to={`/post/${id}`}>
                <Button variant="primary">Read more</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Posts