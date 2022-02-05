import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Header from "../components/Header";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={PostList} />
        <Route path="/login" component={Login} />
        <Route path="/singup" component={Singup} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
