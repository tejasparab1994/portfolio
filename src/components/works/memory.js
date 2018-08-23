import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import memory from './memory.png';

class Memory extends React.Component {
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
              <div><u>Technologies</u>: </div>
              <div className="skills">React.js, Elixir, Phoenix</div>
              <br />
              {/* <br /> */}
            </CardText>
            <Button color="info">Know More</Button>
            <Button color="link" style={{float: 'right'}}>Live Link</Button>
          </CardBody>
          <CardFooter style={{textAlign: 'center'}}>
            <i class="devicon-react-original colored"></i>

          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Memory;
