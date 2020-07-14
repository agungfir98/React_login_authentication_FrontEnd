import React from 'react';
import Login from './components/Login'
import Daftar from './components/Daftar'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/daftar" component={Daftar} />
      </Switch>
      
    </div>
  );
}

export default App;
