import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import othello from './othello.png';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Othello extends React.Component {
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
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height: '95%'}} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Othello MultiPlayer</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>The Othello game implemented with the speed of Phoenix.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={othello} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <u>Technologies:</u>

            </CardText>
            <CardText style = {{textAlign: 'center'}} className="skills">
              Phoenix, Elixir, React.js, Redux, Bootstrap
            </CardText>
            <div>
              <Button color="info" onClick = {this.toggle} className = "know">Know More</Button>
              <Modal size = "lg" isOpen={this.state.modal} toggle={this.toggle} contentClassName = "bg-dark" style = {{ color: 'white'}}>
                <ModalHeader toggle={this.toggle} charCode="❎">Othello MultiPlayer</ModalHeader>
                <ModalBody>
                  <li> Developed an online two-player game which also allowed other users to join in an ongoing game as spectators.</li>
                  <li> Designed the User Interface using ReactJS and developed the server side logic using Elixir.</li>

                  <li> Leveraged Phoenix channels to support multiple instances of the same game and concurrent game sessions. </li>

                </ModalBody>
                <ModalFooter>
                  <a href={`https://github.com/tejasparab1994/Othello`} target="_blank" onClick={this.toggle} className = "btn btn-secondary">Code Link</a>
                </ModalFooter>
              </Modal>
              <a href={`http://othellogame.tejasparab1.com/`} target="_blank" className = "btn btn-secondary code">Live Link</a>
            </div>

          </CardBody>
          <CardFooter style={{textAlign: 'center'}}>
            <i className = "devicon-react-original colored"></i>
            <i className = "devicon-bootstrap-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Othello;
