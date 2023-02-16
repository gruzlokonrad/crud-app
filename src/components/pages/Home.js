import React from 'react'
import Posts from '../features/Posts'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../common/Header'

const Home = () => {
  return (
    <main>
      <Header header={'All Posts'}>
        <Link to={'/post/add'}>
          <Button variant="outline-info">Add post</Button>
        </Link>
      </Header>
      <Posts />
    </main>
  )
}

export default Home