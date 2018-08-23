import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import memory from './memory.png';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Memory extends React.Component {
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
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Memory Game</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>Test your memory by playing this traditional Card flip game.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={memory} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <u>Technologies:</u>
            </CardText>
            <CardText style={{textAlign: 'center'}} className="skills">
              React.js, Elixir, Phoenix
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

          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Memory;
