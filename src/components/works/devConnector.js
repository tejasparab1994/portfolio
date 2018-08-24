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
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height: '95%' }} className = "work_items">
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
                <ModalHeader toggle={this.toggle} charCode="❎">Dev Connector</ModalHeader>
                <ModalBody>
                  <li>Built the backend using Nodejs.</li>
                  <li>Implemented authentication using passport, passport-jwt and jwt.</li>
                  <li>Stored the posts, profile and user data using mongoDB.</li>
                  <li>Leveraged Validator to perform server-side validations throughout the application.</li>
                  <li>Developed the front-end using react-redux.</li>
                </ModalBody>
                <ModalFooter>
                  <a href={`https://github.com/tejasparab1994/devConnector`} target="_blank" onClick={this.toggle} className = "btn btn-secondary">Code Link</a>
                </ModalFooter>
              </Modal>
              <a href={`https://github.com/tejasparab1994/devConnector`} target="_blank" style={{float: "right"}} className = "btn btn-secondary">Code Link</a>
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
