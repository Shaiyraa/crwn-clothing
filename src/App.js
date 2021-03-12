import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
     Hello!
     <Switch>
      <Route exact path='/' component={HomePage} />
     </Switch>
     
    </div>
  );
}//<Route path='/hats' component={HatsPage} />

export default App;
