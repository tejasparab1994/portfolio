import React from 'react';
// import Page from '../common/Page';
import {Link} from 'react-router-dom';
import Footer from '../common/Footer';
// import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Button , CardHeader, CardFooter} from 'reactstrap';
// import webserver from '../works/search.png';
import Server from './server';
import Boston from './boston';
import Phasmo from './phasmo';
import Acro from './acro';
import Unbox from './unbox';
import Snow from 'react-snow-effect';


const close = {
  fontSize: '40px',
  color: 'white'
};

class VideosPage extends React.Component {

  componentDidMount() {
    document.body.style.backgroundColor = "#72CCA7";
  }

  render() {
    return (
      <div className =" videosPage">
        <Snow />
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>
        {/* <iframe autoplay = "0" id="ytplayer" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe> */}
        <div className="videos py-3">
          <Server />
          <Boston />
          <Phasmo />
          <Acro />
          <Unbox />
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default VideosPage;
