import React from 'react';
import PDF from 'react-pdf-js';
import resume from './resume.pdf';
import {Link} from 'react-router-dom';


const close = {
  fontSize: '40px',
  color: 'white'
};

class ResumePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    document.body.style.backgroundColor = "#4F4E4E";
  }


  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }


  render() {

    return (
      <div className = "resumePage">
        <Link to ="/" className = "cancelButton">
        <i className="fa fa-remove" style={close}></i>
      </Link>
      <div className = "resume">
        <PDF
          file={resume}
          onDocumentComplete={this.onDocumentComplete}
          page={this.state.page}
        />
      </div>
    </div>
  )
}
}


export default ResumePage;
