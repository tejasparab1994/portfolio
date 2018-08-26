import React from 'react';

import {Link} from 'react-router-dom';
import Footer from '../common/Footer';

import Server from './server';
import Boston from './boston';
import Phasmo from './phasmo';
import Acro from './acro';
import Unbox from './unbox';



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
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>

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
