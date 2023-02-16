import React from 'react'

const Header = ({ header, children }) => {
  return (
    <header className='d-flex justify-content-between'>
      <h1>{header}</h1>
      {children}
    </header>
  )
}

export default Header