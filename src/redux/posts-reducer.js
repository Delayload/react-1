const ADD_COMMENT = 'ADD-COMMENT';
const UPDATE_NEW_COMMENT = 'UPDATE-NEW-COMMENT';

let initialState = {
  posts: [
    {
      id: '1',
      text: 'A V is drinking a Jever Pilsener by Friesisches Brauhaus zu Jever at Untappd at Home',
      comments : [
        {text: '1st comment'}
      ],
      newCommentText: ''
    },
    {
      id: '2',
      text: 'A V is drinking an El Tormenta by Nova Runda at Untappd at Home',
      comments : [
        {text: '1st comment'},
        {text: '2st comment'}
      ],
      newCommentText: ''
    },
    {
      id: '3',
      text: 'A V is drinking an El Galactico by Nova Runda at Untappd at Home',
      comments : [
        {text: '1st comment'},
        {text: '2st comment'},
        {text: '3st comment'}
      ],
      newCommentText: ''
    }
  ]
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let newComment = {
        text: state.posts.find(el => el.id ===action.id).newCommentText
      }
  
      state.posts.find(el => el.id ===action.id).comments.push(newComment);
      state.posts.find(el => el.id ===action.id).newCommentText = '';
      return state;
    case UPDATE_NEW_COMMENT:
      state.posts.find(el => el.id ===action.id).newCommentText = action.commentText;
      return state;
    default : return state;
  }
}


export const addCommentActionCreator = (post_id) => {
  return {
    type : ADD_COMMENT,
    id : post_id
  }
}

export const onCommentChangeActionCreator = (text,post_id) => {
  return {
    type : UPDATE_NEW_COMMENT,
    id: post_id,
    commentText: text
  }
}

export default postsReducer;