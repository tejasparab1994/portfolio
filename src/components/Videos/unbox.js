import React from 'react';


const Unbox = () => {
  return (
    <div className="card videocard" style={{backgroundColor: '#333', borderColor: '#333'}}>
      <div className="row">
        <div className="embed-responsive embed-responsive-21by9 col-md-6">
          <iframe title="title" className="embed-responsive-item videoframe" src="https://www.youtube.com/embed/YavjzkzGfS4" allowFullScreen = "1"></iframe>
        </div>
        <div className="col-md-6 px-3">
          <div className="card-block px-3">
            <h4 className="card-title" style ={{color: 'white', margin: '1rem', textAlign: 'center'}}>My old Unboxing video from 2014</h4>
            <p className="card-text" style = {{color: 'white'}}>
              This was my first try at making a Youtube video.
              So this is as amatuerish as it can get with me holding my phone in one hand and recording it.
              You can play a game too, maybe count the number of times I say 'MacBook Air 2014 model' <span role="img" aria-label="face with stuck-out tongue and tightly closed eyes">😝</span>.
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}


export default Unbox;
