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
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height: '95%' }} className = "work_items">
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
                <ModalHeader toggle={this.toggle} charCode="❎">Memory Game</ModalHeader>
                <ModalBody>
                  <li>Developed the front end using React.js </li>
                </ModalBody>
                <ModalFooter>
                  <a href={`https://github.com/tejasparab1994/CS-5610/tree/master/HW05/memory`} target="_blank" onClick={this.toggle} className = "btn btn-secondary">Code Link</a>
                </ModalFooter>
              </Modal>
              <a href={`http://memory2.tejasparab1.com/`} target="_blank" style={{float: "right"}} className = "btn btn-secondary">Live Link</a>
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
