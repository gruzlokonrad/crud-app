import React from 'react'
import PostForm from './PostForm'
import { useSelector } from 'react-redux'
import { getPostById, updatePost } from '../../redux/postsRedux'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';


const EditPostForm = () => {
  const dispatch = useDispatch()
  const { postId } = useParams();
  const post = useSelector(state => getPostById(state, postId)) || {}
  
  const handleUpdate = formData => dispatch(updatePost(formData))

  return (
    <PostForm
      action={handleUpdate}
      actionText='Update'
      data={post}
    />
  )
}

export default EditPostForm