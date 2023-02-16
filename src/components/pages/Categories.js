import React from 'react'
import { useSelector } from 'react-redux'
import { getAllCategories } from '../../redux/categoriesRedux'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Categories = () => {
  const categories = useSelector(getAllCategories)

  return (
    <>
      <div>Categories</div>
      <ListGroup>
        {categories.map((category, index) => (
          <Link to={`/category/${category.toLowerCase()}`} key={index}>
            <ListGroup.Item>{category}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </>
  )
}

export default Categories