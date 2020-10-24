import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";

let store = {
  _state : {
    dialogsPage : {
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
    },
    postsPage : {
      posts: [
        {
          id: '1',
          text: 'A V is drinking a Jever Pilsener by Friesisches Brauhaus zu Jever at Untappd at Home',
          comments : [
            {text: '1st comment'}
          ],
          newCommentText: ''
        },
        {
          id: '2',
          text: 'A V is drinking an El Tormenta by Nova Runda at Untappd at Home',
          comments : [
            {text: '1st comment'},
            {text: '2st comment'}
          ],
          newCommentText: ''
        },
        {
          id: '3',
          text: 'A V is drinking an El Galactico by Nova Runda at Untappd at Home',
          comments : [
            {text: '1st comment'},
            {text: '2st comment'},
            {text: '3st comment'}
          ],
          newCommentText: ''
        }
      ]
    }
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('state is changed');
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.postsPage = postsReducer( this._state.postsPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;