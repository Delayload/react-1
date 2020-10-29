import  React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, onMessageChangeActionCreator} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  }

  let onMessageChange = (text) => props.dispatch(onMessageChangeActionCreator(text));


  return <Dialogs
    addMessage={addMessage}
    onMessageChange={onMessageChange}
    newMessageText={props.state.dialogsPage.newMessageText}
    messages = {props.state.dialogsPage.messages}
    dialogs = {props.state.dialogsPage.dialogs}
  />;
}

export default DialogsContainer;