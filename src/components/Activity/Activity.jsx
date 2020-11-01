import React from 'react';
import styles from './Activity.module.scss';
import PostContainer from "./Post/PostContainer";
import {connect} from "react-redux";

const Activity = (props) => {
  let postsElements = props.postsPage.posts.map(post =>
    <PostContainer
      id = {post.id}
      text={post.text}
      comments={post.comments} 
      newCommentText = {post.newCommentText}
    />,
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

let mapStateToProps = (state) => {
  return {
    postsPage: state.postsPage
  }
}

export default connect(mapStateToProps)(Activity);