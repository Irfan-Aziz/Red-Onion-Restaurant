import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home/Home';
import { AuthContextProvider } from './Components/useAuth/useAuth';
import NavBar from './Components/NavBar/NavBar';
import SignUp from './Components/SignUp/SignUp';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Tracking from './Components/Tracking/Tracking'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
           <Route path="/signup">
             <SignUp></SignUp>
           </Route>
           <Route path="/order">
             <PlaceOrder></PlaceOrder>
           </Route>
           <Route>
             <Tracking path="/tracking"></Tracking>
           </Route>
           <Route exact path="/">
             <Home></Home>
           </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
