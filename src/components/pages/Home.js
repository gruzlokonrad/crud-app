import React from 'react'
import Posts from '../features/Posts'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <header className='d-flex justify-content-between'>
        <h1>All Posts</h1>
        <Link to={'/post/add'}>
          <Button variant="outline-info">Add post</Button>
        </Link>
      </header>
      <Posts />
    </main>
  )
}

export default Home