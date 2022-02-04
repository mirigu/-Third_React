import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PostList from "../pages/PostList";
import Header from "../components/Header";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={PostList} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
