import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import dev from './devconnector.png';


class DevConnector extends React.Component {
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
              <div><u>Technologies</u>: </div>
              <div className="skills">MongoDB, ExpressJS, React.js, Redux, Nodejs</div>
            </CardText>


            <Button color="info">Know More</Button>

            <Button color="link" style={{float: 'right'}}>Live Link</Button>
          </CardBody>
          <CardFooter style={{textAlign: 'center'}}>
            <i class="devicon-mongodb-plain colored"></i>
            <i class="devicon-express-original"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-nodejs-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default DevConnector;
