import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import dev from './devconnector.png';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class DevConnector extends React.Component {
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
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Dev Connector</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>
              A social media website that connects developers using the Github API.


            </CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={dev} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <u>Technologies:</u>

            </CardText>
            <CardText style = {{textAlign: 'center'}} className = "skills">
              MongoDB, ExpressJS, React.js, Redux, Nodejs
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
              <Button color="link" style={{float: 'right'}}>Code Link</Button>
            </div>

          </CardBody>
          <CardFooter style={{textAlign: 'center'}}>
            <i className="devicon-mongodb-plain colored"></i>
            <i className="devicon-express-original"></i>
            <i className="devicon-react-original colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default DevConnector;
