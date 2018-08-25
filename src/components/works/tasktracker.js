import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import tasktracker from './tasktracker.png';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class TaskTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height: '95%' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>TaskTracker</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>Assign and track tasks assigned to your teammates.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={tasktracker} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <u>Technologies:</u>

            </CardText>

            <CardText style = {{textAlign: 'center'}} className = "skills">
              React.js, Redux, PostgreSQL, Elixir, Phoenix
            </CardText>


            <div>
              <Button color="info" onClick = {this.toggle} className="know">Know More</Button>
              <Modal size = "lg" isOpen={this.state.modal} toggle={this.toggle} contentClassName = "bg-dark" style = {{ color: 'white'}}>
                <ModalHeader toggle={this.toggle} charCode="❎">Tasktracker</ModalHeader>
                <ModalBody>
                  <li>
                    Built a web application that can be used to track and assign tasks to other users.
                  </li>
                  <li>
                    Developed the front end using react-redux while the back-end using Elixir and Phoenix.
                  </li>
                  <li>
                    Assigned tasks can be marked done by the users once completed hence allowing tracking to check the time taken to complete it.
                  </li>
                </ModalBody>
                <ModalFooter>
                  <a href={`https://github.com/tejasparab1994/tasktracker3`} target="_blank" onClick={this.toggle} className = "btn btn-secondary">Code Link</a>
                </ModalFooter>
              </Modal>
              <a href={`https://tasks3.tejasparab1.com/`} target="_blank" className = "btn btn-secondary code">Live Link</a>
            </div>


          </CardBody>

          <CardFooter style={{textAlign: 'center'}}>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default TaskTracker;
