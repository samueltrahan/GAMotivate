import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";

import Posts from '../../components/Posts/Posts';

import LandingPage from '../../pages/LandingPage/LandingPage';
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";

import userService from "../../services/userService";

import "./App.css";

const App = () => {
  const [user, setUser] = useState("");

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  return (
    <>
      
      <Switch>
        <Route exact path="/login" render={({history}) => 
          <>
          <LandingPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
              />
          </>
        }></Route>

        <Route exact path="/signup" render={({history}) => 
          <>
            <SignupPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          </>
        }></Route>
        
        <Route exact path="/posts" render={() => 
          <div>
            <NavBar user={user} handleLogout={handleLogout} />
            <Posts user={user}/>
          </div>
        }>
        </Route>
      </Switch>
    </>
  );
};

export default App;
