import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getAllCategories } from '../../redux/categoriesRedux'
import { getPostByCategory } from '../../redux/postsRedux'
import NotFound from './NotFound'
import Posts from '../features/Posts'
import Header from '../common/Header'

const SingleCategory = () => {
  const { category } = useParams()
  const categories = useSelector(getAllCategories)
  const selectedCategory = categories.find(elem => elem.toLowerCase() === category)
  const posts = useSelector(state => getPostByCategory(state, category)) || {}

  if (!selectedCategory) return <NotFound />

  return (
    <>
      <Header header={`${selectedCategory}`} />
      <Posts data={posts} />
    </>
  )
}

export default SingleCategory