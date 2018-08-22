import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.work = this.work.bind(this);
    this.about = this.about.bind(this);
    this.contact = this.contact.bind(this);
    this.video = this.video.bind(this);
    // this.aboutBackground = this.aboutBackground.bind(this);
    // this.work_background = this.work_background.bind(this);
  }

  work(){
  document.body.style.backgroundColor="#FA987D";
  }

  about() {
    document.body.style.backgroundColor = "#F06060";
  }

  contact() {
    document.body.style.backgroundColor = "#10A296";
  }

  video() {
    document.body.style.backgroundColor = "#72CCA7";
  }

  render() {
    return (
      <div id = "bl-main" className="bl-main">
        <section>
          <div className = "bl-box">
            <h2>
              <Link to="about" className = "bl-icon bl-icon-about" style={{ textDecoration: 'none', color:'white' }} onClick= {this.about}  >ABOUT</Link>
            </h2>
          </div>
        </section>
        <section id = "bl-work-section">
          <div className = "bl-box">
            <h2>
              <Link to = "works" className = "bl-icon bl-icon-works" style={{ textDecoration: 'none', color:'white' }} onClick= {this.work} >WORKS</Link>
            </h2>
          </div>
        </section>
        <section>
          <div className = "bl-box">
            <h2>
              <Link to="videos" className="bl-icon bl-icon-blog" style={{ textDecoration: 'none', color:'white' }} onClick = {this.video}>VIDEOS & BLOG</Link>
            </h2>
          </div>
        </section>
        <section>
          <div className = "bl-box">
            <h2>
              <Link to = "contact" className = "bl-icon bl-icon-contact" style={{ textDecoration: 'none', color:'white' }} onClick = {this.contact}>CONTACT</Link>
            </h2>
          </div>
        </section>
      </div>

    );
  }
}

export default HomePage;
