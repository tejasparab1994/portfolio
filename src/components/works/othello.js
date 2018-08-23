import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter, CardLink, Col} from 'reactstrap';
import othello from './othello.png';

class Othello extends React.Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Othello MultiPlayer</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>The traditional Othello game implemented with the speed of Phoenix.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={othello} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <div><u>Technologies</u>: </div>
              <div className="skills">
                Phoenix, Elixir, React.js, Redux, Bootstrap
              </div>
            </CardText>
            <Button color="info">Know More</Button>

            <Button color="link" style={{float: 'right'}}>Live Link</Button>

          </CardBody>
          <CardFooter style={{textAlign: 'center'}}>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-bootstrap-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Othello;
