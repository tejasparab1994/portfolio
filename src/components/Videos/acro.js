import React from 'react';

const Acro = () => {
  return (
    <div className="card videocard" style={{backgroundColor: '#333', borderColor: '#333'}}>
      <div className="row">
        <div className="embed-responsive embed-responsive-21by9 col-md-6">
          <iframe title  = "acro" className="embed-responsive-item videoframe" src="https://www.youtube.com/embed/95hCGtBEwDQ" allowFullScreen = "1"></iframe>
        </div>
        <div className="col-md-6 px-3">
          <div className="card-block px-3">
            <h4 className="card-title" style ={{color: 'white', margin: '1rem', textAlign: 'center'}}>Acrophobia environment using VR</h4>
            <p className="card-text" style = {{color: 'white'}}>
              This is a part of the same android app I built during my undergraduation. Here I built a virtual environment for
              Acrophobia, the feat of heights.
            </p>
            <p className="card-text" style = {{color: 'white'}}>
              The same issue as the last video here, I recorded the videos on same day and didn't have the bluetooth controller
              to walk around.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Acro;
