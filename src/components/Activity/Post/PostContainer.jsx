import React from 'react';
import Post from './Post';
import { addCommentActionCreator, onCommentChangeActionCreator } from '../../../redux/posts-reducer';
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewCommentChange: (text, id) => {
      dispatch(onCommentChangeActionCreator(text, id));
    },
    addNewComment: (id) => {
      dispatch(addCommentActionCreator(id));
    }
  }
}

const newPostContainer = connect(null,mapDispatchToProps)(Post);

export default newPostContainer;