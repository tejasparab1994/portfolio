import React from 'react';



const footer = () => {
  return (
    <div className = "footer text-center">
      <div className ="address">
        <span role="img" aria-label="address">🏠</span>
        <p>1171 Boylston Street, Boston, MA - 02215</p>
      </div>
      <div className = "email">
        <span role="img" aria-label="envelope">✉️</span>
        <p>tejas.bhaskar.parab@gmail.com</p>
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

export default footer;
