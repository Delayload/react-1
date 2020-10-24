import React from 'react';
import styles from './Post.module.scss';
import Comment from './Comment/Comment';
import { addCommentActionCreator, onCommentChangeActionCreator } from '../../../redux/posts-reducer';
const Post = (props) => {
  let commentsElements = props.comments.map(comment => <Comment text = {comment.text}/>);
  
  let addComment = () => {
    props.dispatch(addCommentActionCreator(props.id));
  }

  let onCommentChange = (evt) => {
    let text = evt.target.value;
    props.dispatch(onCommentChangeActionCreator(text, props.id));
  }

  return (
    <div>
      {props.text}
      <div>
        <button>Comment</button>
        <button>Toast</button>
      </div>
      <div>
        {commentsElements}
      </div>
      <div className={styles.newComment}>
        <textarea onChange={onCommentChange} value={props.newCommentText}></textarea>
        <button onClick={addComment}>Post</button>
      </div>
    </div>
  );
}

export default Post;