import React from 'react';
import {Link} from 'react-router-dom';

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
  document.body.style.backgroundColor="#EE8216";
  }

  about() {
    document.body.style.backgroundColor = "#F15F11";
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
          <Link to="about"  style={{ textDecoration: 'none', color:'white' }} onClick= {this.about}>
            <div className = "bl-box">
              <h2 className = "bl-icon bl-icon-about">
                ABOUT
              </h2>
            </div>
          </Link>
        </section>
        <section id = "bl-work-section">
          <Link to = "works"  style={{ textDecoration: 'none', color:'white' }} onClick= {this.work} >
            <div className = "bl-box">
              <h2 className = "bl-icon bl-icon-works">
                WORKS
              </h2>
            </div>
          </Link>
        </section>
        <section>
          <Link to="videos"  style={{ textDecoration: 'none', color:'white' }} onClick = {this.video}>
            <div className = "bl-box">
              <h2 className="bl-icon bl-icon-blog">
                VIDEOS & BLOG
              </h2>
            </div>
          </Link>
        </section>
        <section>
          <Link to = "contact"  style={{ textDecoration: 'none', color:'white' }} onClick = {this.contact}>
            <div className = "bl-box">
              <h2 className = "bl-icon bl-icon-contact">
                CONTACT
              </h2>
            </div>
          </Link>
        </section>
      </div>

    );
  }
}

export default HomePage;
