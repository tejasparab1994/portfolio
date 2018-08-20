import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ContactPage from './components/Contact/ContactPage';
import VideosPage from './components/Videos/VideosPage';
import WorkPage from './components/works/WorkPage';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App = () => (
  <Router>
    <div className = "mycontainer">
      <Route
        render = {({ location }) => (
          <TransitionGroup>
            <CSSTransition key = {location.key} classNames = "page" timeout={{enter: 1000, exit: 1000,}}>
              <Switch location = {location} >

                <Route exact path = "/" component= {HomePage} />
                <Route path = "/about" component= {AboutPage} />
                <Route path = "/works" component = {WorkPage} />
                <Route path = "/contact" component= {ContactPage} />
                <Route path = "/videos" component= {VideosPage} />
                <Route render={() => <div>Not Found</div>} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  </Router>
);

export default App;
