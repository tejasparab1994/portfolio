import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';


class Virtual extends React.Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>VR: PET</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>An android app developed for phobia exposure therapy using Virtual Reality.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <div><u>Technologies</u>: </div>
              <div className="skills">
                C#, Unity 3D, Google VR SDK


              </div>
            </CardText>


            <Button color="info">Know More</Button>

            <Button color="link" style={{float: 'right'}}>GitHub Link</Button>
          </CardBody>
          <CardFooter style={{textAlign:'center'}}>
            <i class="devicon-csharp-plain"></i>
            <i class="devicon-android-plain colored"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Virtual;
