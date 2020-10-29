import React from 'react';
import Post from './Post';
import { addCommentActionCreator, onCommentChangeActionCreator } from '../../../redux/posts-reducer';

const PostContainer = (props) => {
  let addComment = () => {
    props.dispatch(addCommentActionCreator(props.id));
  }

  let changeComment = (text) => {
    props.dispatch(onCommentChangeActionCreator(text, props.id));
  }

  return (
    <div>
        <Post
          updateNewCommentChange={changeComment}
          addNewComment={addComment}
          comments={props.comments}
          newCommentText={props.newCommentText}
        />
    </div>
  );
}

export default PostContainer;