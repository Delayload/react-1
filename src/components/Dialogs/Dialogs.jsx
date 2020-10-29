import  React from 'react';
import styles from './Dialogs.module.scss';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map(dialog => <Dialog name={dialog.name} id = {dialog.id}/>);
  let messagesElements = props.messages.map(message => <Message text={message.message}/>);

  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = (evt) => {
    let text = evt.target.value;
    props.onMessageChange(text);
  }

  return (
    <div  className={styles.dialogs}>
      <ul className={styles.dialogs__items}>
        { dialogsElements }
      </ul>
      <div className={styles.messages}>
        { messagesElements }
        <div className={styles.newMessage}>
          <textarea onChange={onMessageChange} value={props.newMessageText}/>
          <button onClick={addMessage}>Comment</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;