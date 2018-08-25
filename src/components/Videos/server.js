import React from 'react';



const Server = () => {
  return (
    <div className="card videocard" style={{backgroundColor: '#333', borderColor: '#333'}}>
      <div className="row">
        <div className="embed-responsive embed-responsive-21by9 col-md-6">
          <iframe title = "server" className="embed-responsive-item videoframe" src="https://www.youtube.com/embed/yOOs06Tw0bE" allowFullScreen = "1"></iframe>
        </div>
        <div className="col-md-6 px-3">
          <div className="card-block px-3">
            <h4 className="card-title" style ={{color: 'white', margin: '1rem', textAlign: 'center'}}>A Web Server in rust</h4>
            <p className="card-text" style = {{color: 'white'}}>
              This video describes the web server I built as a final project for my Computer Systems course.
              The website I mention in the video is my professor's website <span role="img" aria-label = "smiling face with open mouth and cold sweat">😅</span>.
            </p>
            <p className="card-text" style = {{color: 'white'}}>
              I tested the server using Apache Benchmark and you can find more details about it on the 'Works' page.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Server;
