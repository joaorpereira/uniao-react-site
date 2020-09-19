import React from 'react';
import GlobalStyles from "./globalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Navbar, Footer} from "./components/index"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"

function App() {
  return (
    <>
      <Router>
        <GlobalStyles/>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route exact="/galery" component={Galery}/> */}
          <Route path="/contact" exact component={Contact}/>
          {/* <Route exact="/about" component={About}/> */}
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

