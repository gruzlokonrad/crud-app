import React from 'react'
import { useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/postsRedux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Posts = () => {
  const posts = useSelector(getAllPosts);
  console.log('posts', posts)

  return (
    <Row
      xs={1}
      sm={2}
      lg={3}
      xxl={4}
      className='gy-3 my-3'
    >
      {posts.map(({ id, title, author, publishedDate, shortDescription }, index) => (
        <Col key={index}>
          <Card className='mx-auto'>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle>Author: {author}</Card.Subtitle>
              <Card.Subtitle>Published: {publishedDate}</Card.Subtitle>
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