import React from 'react';
import styles from './Comment.module.scss';

const Comment = (props) => {
  return (
    <div className={styles.content}>
      {props.text}
    </div>
  )
}

export default Comment;