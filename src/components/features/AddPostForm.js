import React from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import shortid from 'shortid';
import PostForm from './PostForm';


const AddPostForm = ({ data }) => {
  const dispatch = useDispatch()
  const submitPost = (formData) => dispatch(addPost({ ...formData, id: shortid() }))
  return (
    <PostForm
      action={submitPost}
      actionText='Submit'
    />
  )
}

export default AddPostForm