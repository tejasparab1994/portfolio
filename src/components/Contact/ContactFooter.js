import React from 'react';



const ContactFooter = () => {
  return (
    <div className = "footer text-center">
      <div className ="address">
        <span role="img" aria-label="address">
          <i className="fa fa-home fa-lg"></i>
        </span>
        <p>1171 Boylston Street, Boston, MA - 02215</p>
      </div>
      <div className = "email">
        <span role="img" aria-label="envelope">
          <i className="fa fa-envelope fa-lg"></i>
        </span>
        <p>
          <a href="mailto: parab.t654@gmail.com?Subject=Hello" target="_top" style={{color: "white"}}>
            parab.t654@gmail.com
          </a>
        </p>
      </div>
      <div className = "contact">
        <span role="img" aria-label="phone">
          <i className="fa fa-mobile fa-lg"></i>
        </span>
        <p>+1 617 858 9647</p>
      </div>
      <div className = "copyright">
        <span role="img" aria-label="man on laptop">👨</span>‍💻
        <p>Made with <span role="img" aria-label="heart">❤️ </span>by Tejas</p>
      </div>
    </div>
  );
}

export default ContactFooter;
