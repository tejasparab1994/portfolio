import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';


class TaskTracker extends React.Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>TaskTracker</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>A social media for developers using their Github stats</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>


            <Button color="info">Know More</Button>

            <Button color="link" style={{float: 'right'}}>Live Link</Button>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    );
  }

}

export default TaskTracker;
