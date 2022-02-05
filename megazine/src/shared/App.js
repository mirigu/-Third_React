import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import PostList from "../pages/PostList";
import Header from "../components/Header";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={PostList} />
        <Route path="/login" component={Login} />
        <Route path="/singup" component={Singup} />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
