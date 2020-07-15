import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import { Login } from "./components/Login";
import { FriendList } from "./components/FriendList";
import { AddFriend } from "./components/AddFriend";
import swal from 'sweetalert';

import "./App.css";

function App(props) {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
    window.location.reload(false);
    swal("Thanks for dropping by!", "", "success");
  };
  return (
    <section className="App">
      <Router>
        <div className="nav">

          <Link to="/friendslist">Friends List</Link>

          <Link to="/addfriend">Add Friend</Link>
          <Link to="/login">Login</Link>
          <button onClick={logout}>Log Out</button>
        </div>
        <div className="routes">
          <Switch>
            <PrivateRoute exact path="/friendslist" component={FriendList} />
            <PrivateRoute exact path="/addfriend" component={AddFriend} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>
        </div>
      </Router>
    </section>
  );
}

export default App;