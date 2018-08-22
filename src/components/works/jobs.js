import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';


class Jobs extends React.Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Job Portal</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>
              Upload your resume. Look for jobs and find out whether it matches your profile.
            </CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <div><u>Technologies</u>: </div>
              <div className="skills">
                React.js, Redux, Elixir, Phoenix, PostgreSQL, Bootstrap
              </div>
            </CardText>


            <Button color="info">Know More</Button>

            <Button color="link" style={{float: 'right'}}>Live Link</Button>
          </CardBody>
          <CardFooter style={{textAlign: 'center'}}>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-bootstrap-plain colored"></i>
            <i class="devicon-postgresql-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Jobs;
