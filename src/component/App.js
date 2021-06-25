import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Main from "../main";
import Info from "../info";
import Git from "../git";
import Result from "../result";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Main} />
      <Route exact path="/info" component={Info} />
      <Route exact path="/git" component={Git} />
      <Route exact path="/Result" component={Result} />
      <Footer />
    </Router>
  );
}

export default App;