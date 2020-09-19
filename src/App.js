import React from 'react';
import GlobalStyles from "./globalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Navbar, Footer} from "./components/index"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Galery from "./pages/Galery/Galery"

function App() {
  return (
    <>
      <Router>
        <GlobalStyles/>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>      
          <Route path="/about" exact component={About}/>
          <Route path="/galery" exact component={Galery}/>
          <Route path="/contact" exact component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

