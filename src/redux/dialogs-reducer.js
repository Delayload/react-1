const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE';

let initialState = {
  dialogs : [
    {id: '1', name: 'Alex'},
    {id: '2', name: 'John'},
    {id: '3', name: 'Ann'},
    {id: '4', name: 'James'}
  ],
  messages : [
    {id: '1', message: 'Hi'},
    {id: '1', message: 'it'},
    {id: '1', message: 'is'},
    {id: '1', message: 'me'}
  ],
  newMessageText : ''
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: '1',
        message: state.newMessageText
      };
    
      state.messages.push(newMessage);
      state.newMessageText='';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageText;
      return state;
    default : return state;
  }
}

export const addMessageActionCreator = (text) => {
  return {
    type: SEND_MESSAGE
  }
}

export const onMessageChangeActionCreator = (text) => {
  return {
    type : UPDATE_NEW_MESSAGE_TEXT,
    messageText: text
  }
}

export default dialogsReducer;