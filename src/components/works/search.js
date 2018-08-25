import React from 'react';

import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
import search from './search.png';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Search extends React.Component {
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
              <CardTitle style= {{ textAlign: 'center'}}><b><u>Search Engine</u></b></CardTitle>
            </CardHeader>
            <CardSubtitle>A search engine for wikipedia articles written in Python.</CardSubtitle>
          </CardBody>
          <CardImg top width="100%" src={search} alt="Card image cap" />
          <CardBody>
            <CardText style={{textAlign: 'center', display: 'flex', flexFlow: 'column'}}>
              <u>Technologies:</u>

            </CardText>
            <CardText style ={{ textAlign: 'center' }} className = "skills">
              Python, Apache Lucene, BeautifulSoup, Scrapy
            </CardText>

            <div>
              <Button color="info" onClick = {this.toggle} className = "know">Know More</Button>
              <Modal size = "lg" isOpen={this.state.modal} toggle={this.toggle} contentClassName = "bg-dark" style = {{ color: 'white'}}>
                <ModalHeader toggle={this.toggle} charCode="❎">Web Server</ModalHeader>
                <ModalBody>

                  <li>Designed retrieval systems using Smoothed Query Likelihood, BM25, Lucene and tf-idf methods in Python.</li>
                  <li>Implemented an inverted-index generator that reads the raw documents, generates a unigram, bi-gram and tri-gram inverted index, and stores it in JSON format.</li>

                  <li>Compared all four retrieval systems’ performance using their mean precision and recall values on the corpus.</li>
                </ModalBody>
                <ModalFooter>
                  <a href={`https://github.com/tejasparab1994/searchEngine`} target="_blank" onClick={this.toggle} className = "btn btn-secondary">Code Link</a>
                </ModalFooter>
              </Modal>
              <a href={`https://github.com/tejasparab1994/searchEngine`} target="_blank" className = "btn btn-secondary code">Code Link</a>
            </div>

          </CardBody>
          <CardFooter style = {{textAlign: 'center'}}>
            <i className="devicon-python-plain"></i>
            <i className="devicon-apache-plain-wordmark"></i>
          </CardFooter>
        </Card>
      </div>
    );
  }

}

export default Search;
