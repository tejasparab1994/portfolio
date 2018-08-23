import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, CardDeck, Button, CardGroup } from 'reactstrap';
import DevConnector from './devConnector';
import Jobs from './jobs';
import Memory from './memory';
import Othello from './othello';
import Search from './search';
import TaskTracker from './tasktracker';
import Virtual from './virtual';
import WebServer from './webserver';
import Footer from '../common/Footer';

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
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>
        {/* <div className = "work_title">
          <span className="yellow-text"><u>A</u></span>,&nbsp;Few&nbsp;Projects&nbsp;<u>That</u>
          <span className="yellow-text"><u>&nbsp;I&nbsp;Have&nbsp;Built</u>.</span>
        </div> */}
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
