import React from 'react';

import {Link} from 'react-router-dom';

import DevConnector from './devConnector';
import Jobs from './jobs';
import Memory from './memory';
import Othello from './othello';
import Search from './search';
import TaskTracker from './tasktracker';
import Virtual from './virtual';
import WebServer from './webserver';
import Footer from '../common/Footer';
import Snow from 'react-snow-effect';

const close = {
  fontSize: '40px',
  color: 'white'
};

class WorkPage extends React.Component {

  componentDidMount(){
    document.body.style.backgroundColor="#EE8216";
  }

  render() {
    return (
      <div className ="workPage">
        <Snow />
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>
        <div className = "text-center">
          <button className = "btn-primary btn-lg float-right work-button">
            <Link to = "/resume" style={{ textDecoration: 'none', color:'white' }}>
              Fork Resume
            </Link>
          </button>
        </div>

        <div className = "workFlex">
          <DevConnector/>
          <Jobs/>
          <Othello/>
          <WebServer/>
          <TaskTracker />
          <Memory />
          <Search />
          <Virtual />

        </div>
        <Footer />
      </div>
    );
  }
}



export default WorkPage;
