import React from 'react';



const ContactFooter = () => {
  return (
    <div className = "footerContact text-center">
      <div className ="address">
        <span role="img" aria-label="address">🏠</span>
        <p>1171 Boylston Street, Boston, MA - 02215</p>
      </div>
      <div className = "email">
        <span role="img" aria-label="envelope">✉️</span>
        <p>
          <a href="mailto: tejas.bhaskar.parab@gmail.com?Subject=Hello" target="_top" style={{color: "white"}}>
            tejas.bhaskar.parab@gmail.com
          </a>
        </p>
      </div>
      <div className = "contact">
        <span role="img" aria-label="phone">☎️</span>
        <p>+1 617 858 9647</p>
      </div>
      <div className = "copyright">
        <span role="img" aria-label="man on laptop">👨</span>‍💻
        <p>Made with <span role="img" aria-label="heart">❤️ </span>by React & Tejas</p>
      </div>
    </div>
  );
}

export default ContactFooter;
