import React from 'react';



const Boston = () => {
  return (
    <div className="card videocard" style={{backgroundColor: '#333', borderColor: '#333'}}>
      <div className="row">
        <div className="embed-responsive embed-responsive-21by9 col-md-6">
          <iframe title="boston" className="embed-responsive-item videoframe" src="https://www.youtube.com/embed/qYGWu1oJP6M" allowFullScreen = "1"></iframe>
        </div>
        <div className="col-md-6 px-3">
          <div className="card-block px-3">
            <h4 className="card-title" style ={{color: 'white', margin: '1rem', textAlign: 'center'}}>Boston using Unity3D</h4>
            <p className="card-text" style = {{color: 'white'}}>
              I extract the information from the tags in the file exported from OpenStreetMap to render the map.
              The roads have been outlined red while the buildings have been outlined blue to differentiate between the two more easily.
            </p>
            <p className="card-text" style = {{color: 'white'}}>
              The script can be used for any map exported from OpenStreetMap and built using Unity3D.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}


export default Boston;
