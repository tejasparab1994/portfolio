import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
      <div id = "bl-main" className="bl-main">
        <section>
          <div className = "bl-box">
            <h2>
              <Link to="about" className = "bl-icon bl-icon-about" style={{ textDecoration: 'none', color:'white' }}>About</Link>
            </h2>
          </div>
        </section>
        <section id = "bl-work-section">
          <div className = "bl-box">
            <h2>
              <Link to = "works" className = "bl-icon bl-icon-works" style={{ textDecoration: 'none', color:'white' }}>Works</Link>
            </h2>
          </div>
        </section>
        <section>
          <div className = "bl-box">
            <h2>
              <Link to="videos" className="bl-icon bl-icon-blog" style={{ textDecoration: 'none', color:'white' }}>Videos & Blog</Link>
            </h2>
          </div>
        </section>
        <section>
          <div className = "bl-box">
            <h2>
              <Link to = "contact" className = "bl-icon bl-icon-contact" style={{ textDecoration: 'none', color:'white' }}>Contact</Link>
            </h2>
          </div>
        </section>
      </div>

    );
  }
}

export default HomePage;
