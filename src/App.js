import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Activity from './components/Activity/Activity';
import {Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <div className='container'>
        <Route path='/profile' component={Profile}/>
        <Route path='/activity' render={() =>
          <Activity/>
        }/>
        <Route path='/dialogs' render={() =>
          <DialogsContainer/>
        }/>
      </div>
    </div>
  );
}

export default App;
