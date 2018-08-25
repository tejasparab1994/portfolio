import React from 'react';



const Phasmo = () => {
  return (
    <div className="card videocard" style={{backgroundColor: '#333', borderColor: '#333'}}>
      <div className="row">
        <div className="embed-responsive embed-responsive-21by9 col-md-6">
          <iframe title = "phasmo" className="embed-responsive-item videoframe" src="https://www.youtube.com/embed/BZIUmNag_K8" allowFullScreen = "1"></iframe>
        </div>
        <div className="col-md-6 px-3">
          <div className="card-block px-3">
            <h4 className="card-title" style ={{color: 'white', margin: '1rem', textAlign: 'center'}}>Phasmophobia environment using VR</h4>
            <p className="card-text" style = {{color: 'white'}}>
              I built this android application during my undergraduation. The app was based on the idea of tackling different phobias using
              Virtual Reality. I used Unity3D, C# and Google VR SDK to build this.
            </p>
            <p className="card-text" style = {{color: 'white'}}>
              You actually need a bluetooth controller to walk around in the virtual environment. I didn't have it while recording this video.
              So I tap my phone screen ferociously to walk around <span role="img" aria-label = "face with stuck-out tongue and tightly closed eyes">😝</span>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Phasmo;
