import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../common/Footer';
import Snow from 'react-snow-effect';

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
        <Snow />
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>
        <div className = "contactFlex">
          Why do we use it?
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here',
          making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </div>
        <Footer />

      </div>
    );
  }
}

export default ContactPage;
