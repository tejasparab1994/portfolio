import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import tasktracker from './tasktracker.png';

class TaskTracker extends React.Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>TaskTracker</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>Assign and track tasks assigned to your teammates.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={tasktracker} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <div><u>Technologies</u>: </div>
              <div className="skills">React.js, Redux, PostgreSQL, Elixir, Phoenix</div>
            </CardText>


            <Button color="info">Know More</Button>

            <Button color="link" style={{float: 'right'}}>Live Link</Button>
          </CardBody>

          <CardFooter style={{textAlign: 'center'}}>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-postgresql-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default TaskTracker;
