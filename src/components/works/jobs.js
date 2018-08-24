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
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', height: '95%' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Job Portal</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>
              Upload your resume. Look for jobs and find out if it matches your profile.
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
                <ModalHeader toggle={this.toggle} charCode="❎">Jobs Portal</ModalHeader>
                <ModalBody>
                  <li>
                    Developed a responsive single page web application which allowed users to search for jobs, JSON data is fetched from multiple RESTful API’s from server-side based on the keywords entered.
                  </li>
                  <li>
                    Implemented ‘sign in’ using GitHub Oauth and a resume parsing feature in Elixir using RESTful API which parsed the resume, extracted technical skills and showed relevant jobs on the user home page.
                  </li>
                  <li>
                    Maintained a PostgreSQL DB to store user account data such as extracted skills, resume and login type of user.
                  </li>
                </ModalBody>
                <ModalFooter>
                  <a href={`https://github.com/tejasparab1994/jobPortal`} target="_blank" onClick={this.toggle} className = "btn btn-secondary">Code Link</a>
                </ModalFooter>
              </Modal>
              <a href={`https://github.com/tejasparab1994/jobPortal`} target="_blank" style={{float: "right"}} className = "btn btn-secondary">Code Link</a>
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
