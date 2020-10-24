import React from 'react';
import styles from './Activity.module.scss';
import Post from './Post/Post';

const Activity = (props) => {
  let postsElements = props.postsPage.posts.map(post => 
    <Post 
      text={post.text} 
      id = {post.id}
      comments={post.comments} 
      newCommentText = {post.newCommentText}
      dispatch = {props.dispatch}
    />
  );

  return (
    <div className={styles.content}>
      <h1>Recent Friend Activity</h1>
      <div>
        {postsElements}
      </div>
    </div>
  );
}

export default Activity;