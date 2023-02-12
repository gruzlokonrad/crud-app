export const getAllPosts = ({ posts }) => posts
export const getPostById = ({posts}, id) => posts.find((post) => post.id === id) 

const createActionName = actionName => `app/posts/${actionName}`
const REMOVE_POST = createActionName('remove_post')
const ADD_POST = createActionName('add_post')

export const removePost = payload => ({type: REMOVE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});

const postsReducer = (statePart = [], {type, payload}) => {
  // console.log('payload', payload)
  switch (type) {
    case ADD_POST:
      return [...statePart, payload]
    case REMOVE_POST:
      return [...statePart.filter(post => post.id !== payload)]
    default:
      return statePart;
  }
}

export default postsReducer