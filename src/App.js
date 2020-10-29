import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Activity from './components/Activity/Activity';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <div className='container'>
          <Route path='/profile' component={Profile}/>
          <Route path='/activity' render={() => 
            <Activity 
              postsPage = {props.state.postsPage}
              dispatch = {props.dispatch}
            />
          }/>
          <Route path='/dialogs' render={() => 
            <DialogsContainer
              state = {props.state}
              dispatch = {props.dispatch}/>
          }/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
