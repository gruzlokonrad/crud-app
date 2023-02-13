import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'

const NavBar = () => {
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Post', url: '/post/:id' },
    { name: 'About', url: '/about' },
  ]

  return (
    <Navbar bg="primary" variant="dark" className='text-white rounded my-4 p-2'>
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="ml-auto">
          {navLinks.map(({ name, url }, index) =>
            <Nav.Link key={index} as={NavLink} to={url}>{name}</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar