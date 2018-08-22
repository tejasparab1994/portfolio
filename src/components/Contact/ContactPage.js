import React from 'react';
import {Link} from 'react-router-dom';


const close = {
  fontSize: '40px',
  color: 'white'
};

class ContactPage extends React.Component {

  componentDidMount(){
    document.body.style.backgroundColor = "#10A296";
  }

  render() {
    return (
      <div className = "contactPage">
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>
      </div>
    );
  }
}

export default ContactPage;
