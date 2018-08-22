import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';

const close = {
  fontSize: '40px',
  color: 'white'
};

class VideosPage extends React.Component {
  render() {
    return (
      <Page background="#72CCA7" color= "#fffff">
        {/* <div className = "container"> */}
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>
        <div>
          <h1>Videos and Blog Posts</h1>
          <p>Youtube explanation videos and the old blog link</p>
        </div>
      </Page>
    );
  }
}

export default VideosPage;
