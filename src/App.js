import "./App.css";
import Footer from "./component/DividedComponents/Footer";
import Home from "./component/Home";
import Navbar from "./component/DividedComponents/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./component/Aboutus/About";
import Service from "./component/Services/Services";
import Portfolios from "./component/Portfolio/Portfolio";
import Team from "./component/DividedComponents/Team";
import Teams from "./component/Team/Teams";
import Contact from "./component/DividedComponents/Contact";
import Contacts from "./component/Contact/Contacts";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutus">
            <About />
          </Route>
          <Route path="/services">
            <Service />
          </Route>
          <Route path="/portfolio">
            <Portfolios />
          </Route>
          <Route path="/team">
            <Teams />
          </Route>
          <Route path="/contact">
            <Contacts />
          </Route>
          <Route path="/contact">
            <Teams />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
