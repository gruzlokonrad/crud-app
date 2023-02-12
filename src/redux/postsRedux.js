export const getAllPosts = ({ posts }) => posts

const createActionName = actionName => `app/posts/${actionName}`;

const postsReducer = (statePart = [], {type, payload}) => {
  switch (type) {
    case '':
      return [statePart, payload]
    default:
      return statePart;
  }
}

export default postsReducer