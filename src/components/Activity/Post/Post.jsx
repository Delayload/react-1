import React from 'react';
import styles from './Post.module.scss';
import Comment from './Comment/Comment';

const Post = (props) => {
  let commentsElements = props.comments.map(comment => <Comment text = {comment.text}/>);
  let newPostElement = React.createRef()

  let onCommentChange = () => {
    let text = newPostElement.current.value;
    props.updateNewCommentChange(text, props.id);
  }

  let onAddComment = () => {
    props.addNewComment(props.id);
  }
  return (
    <div>
      {props.text}
      {props.id}
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