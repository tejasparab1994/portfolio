import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import Footer from '../common/Footer';

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

      </div>

    );
  }
}

export default VideosPage;
