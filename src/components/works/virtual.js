import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import virtual from './virtual.png';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Virtual extends React.Component {
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
              <CardTitle style= {{ textAlign: 'center'}}><b><u>VR: PET</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>An android app developed for phobia exposure therapy using Virtual Reality.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={virtual} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <u>Technologies:</u>
            </CardText>


            <CardText style = {{ textAlign: 'center'}} className="skills">
              C#, Unity 3D, Google VR SDK
            </CardText>


            <div>
              <Button color="info" onClick = {this.toggle} className = "know">Know More</Button>
              <Modal size = "lg" isOpen={this.state.modal} toggle={this.toggle} contentClassName = "bg-dark" style = {{ color: 'white'}}>
                <ModalHeader toggle={this.toggle} charCode="❎">Web Server</ModalHeader>
                <ModalBody>
                  <li>
                    Developed a virtual Reality mobile application having virtual environments for Acrophobia, Arachnophobia,
                    and Nyctophobia leveraging Google VR SDK and Google Cardboard.
                  </li>
                </ModalBody>
                <ModalFooter>
                  <a href={`https://github.com/tejasparab1994/unity-virtual_reality`} target="_blank" onClick={this.toggle} className = "btn btn-secondary">Code Link</a>
                </ModalFooter>
              </Modal>
              <a href={`https://github.com/tejasparab1994/unity-virtual_reality`} target="_blank" className = "btn btn-secondary code">Code Link</a>
            </div>

          </CardBody>
          <CardFooter style={{textAlign:'center'}}>
            <i className = "devicon-csharp-plain"></i>
            <i className = "devicon-android-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Virtual;
