import React from 'react';
import GlobalStyles from "./globalStyles"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Navbar, Footer} from "./components/index"
import Home from "./pages/Home/Home"

function App() {
  return (
    <>
      <Router>
        <GlobalStyles/>
        <Navbar/>
        <Switch>
          <Route exact="/" component={Home}/>
          {/* <Route exact="/galery" component={Galery}/>
          <Route exact="/contact" component={Contact}/>
          <Route exact="/about" component={About}/> */}
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
