import React from 'react';
import styles from './Post.module.scss';
import Comment from './Comment/Comment';

const Post = (props) => {
  let commentsElements = props.comments.map(comment => <Comment text = {comment.text}/>);
  let newPostElement = React.createRef()

  let onCommentChange = () => {
    let text = newPostElement.current.value;
    props.updateNewCommentChange(text);
  }

  let onAddComment = () => {
    props.addNewComment();
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
        <textarea onChange={onCommentChange} value={props.newCommentText} ref={newPostElement}/>
        <button onClick={onAddComment}>Post</button>
      </div>
    </div>
  );
}

export default Post;