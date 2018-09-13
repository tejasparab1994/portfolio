import React from 'react';
import {Link} from 'react-router-dom';
import ContactFooter from './ContactFooter';

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
      <div className = "contain">
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>

        <div className = "contactPage">


          <div className = "contactFlex text-center">
            <div className ="contactText">
              You may contact me on

              <div className ="contactIcons">

                <a href="https://www.linkedin.com/in/tejasbhaskarparab/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', color: 'white'}}>
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

                &nbsp;

                <a href = "https://github.com/tejasparab1994" target="_blank" rel="noopener noreferrer" style ={{textDecoration: 'none', color: 'white'}}>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>

                &nbsp;

                <a href="mailto: parab.t654@gmail.com?Subject=Hello" target="_top" style={{textDecoration: 'none', color: "white"}}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>

                &nbsp;

                <a href = "https://www.facebook.com/TJ.parab" target = "_blank" rel="noopener noreferrer" style = {{textDecoration: 'none', color: 'white'}}>
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a>


              </div>
            </div>
          </div>

          <ContactFooter />
        </div>
      </div>
    );
  }
}

export default ContactPage;
