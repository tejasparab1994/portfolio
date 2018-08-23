import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import search from './search.png';

class Search extends React.Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className = "work_items">
          <CardBody>
            <CardHeader>
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Search Engine</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>A search engine for wikipedia articles written in Python.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={search} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <div><u>Technologies</u>: </div>
              <div className="skills">
                Python, Apache Lucene, BeautifulSoup, Scrapy

              </div>
            </CardText>

            <Button color="info">Know More</Button>

            <Button color="link" style={{float: 'right'}}>GitHub Link</Button>
          </CardBody>
          <CardFooter style = {{textAlign: 'center'}}>
            <i class="devicon-python-plain"></i>
            <i class="devicon-apache-plain-wordmark"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Search;
