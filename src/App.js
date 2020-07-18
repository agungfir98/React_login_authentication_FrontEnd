import React from 'react';
import Login from './components/Login'
import Daftar from './components/Daftar'
import Dashboard from './components/Dasboard';
import Lupapassword from './components/Lupapassword';
import Resetpassword from './components/Resetpassword'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/daftar" component={Daftar} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/lupa-password" component={Lupapassword} />
        <Route path="/resetpassword/:token" component={Resetpassword} />
      </Switch>
      
    </div>
  );
}

export default App;
