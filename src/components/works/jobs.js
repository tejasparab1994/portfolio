import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import jobs from './jobs.png';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Jobs extends React.Component {
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
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Job Portal</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>
              Upload your resume. Look for jobs and find out whether it matches your profile.
            </CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={jobs} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <u>Technologies:</u>

            </CardText>
            <CardText style ={{textAlign: 'center'}} className="skills">
              React.js, Redux, Elixir, Phoenix, PostgreSQL, Bootstrap
            </CardText>

            <div>
              <Button color="info" onClick = {this.toggle}>Know More</Button>
              <Modal size = "lg" isOpen={this.state.modal} toggle={this.toggle} contentClassName = "bg-dark" style = {{ color: 'white'}}>
                <ModalHeader toggle={this.toggle} charCode="❎">Web Server</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>GitHub Link</Button>{' '}
                </ModalFooter>
              </Modal>
              <Button color="link" style={{float: 'right'}}>Live Link</Button>
            </div>

          </CardBody>
          <CardFooter style={{textAlign: 'center'}}>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-bootstrap-plain colored"></i>
            <i className="devicon-postgresql-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Jobs;
