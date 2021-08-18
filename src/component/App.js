import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../main";
import Info from "../info";
import Git from "../git";
import Result from "../result";
import Callback from "../callback";
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <div id={"container"}>
        <Route exact path="/" component={Main} />
        <Route exact path="/git" component={Git} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/Result" component={Result} />
        <Route exact path="/callback" component={Callback} />
      </div>

      <Footer />
    </Router>
  );
}

export default App;