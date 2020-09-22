import React from 'react';
import './App.css';
import GlobalStyles from "./globalStyles"
import { Switch, Route } from "react-router-dom"
import { Home, Contact, About, Galery } from "./pages/index"
import { Navbar, Footer, ScrollToTop} from "./components/index"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ScrollToTop/>
      <Navbar/>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route path="/" exact component={Home}/>      
                <Route path="/about" exact component={About}/>
                <Route path="/galery" exact component={Galery}/>
                <Route path="/contact" exact component={Contact}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}/>
        <Footer/>
    </>
  );
}

export default App;

