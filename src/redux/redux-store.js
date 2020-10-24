import dialogsReducer from "./dialogs-reducer";
import postsReducer from "./posts-reducer";
import { createStore, combineReducers } from 'redux'; 

let reducers = combineReducers({
  postsPage: postsReducer,
  dialogsPage: dialogsReducer
});
let store = createStore(reducers);

export  default store;

