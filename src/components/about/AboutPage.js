import React from 'react';
// import Page from '../common/Page';
import {Link} from 'react-router-dom';
import tejas1 from './tejas1.jpeg';
import messi from "./messi.gif";
// import {Card} from 'reactstrap';
import Footer from '../common/Footer';



const close = {
  fontSize: '40px',
  color: 'white'
};

class AboutPage extends React.Component {


  componentDidMount(){
    document.body.style.backgroundColor = "#F15F11";
  }

  render() {
    return (
      <div className = "aboutPage">
        <Link to ="/" className = "cancelButton">
          <i className="fa fa-remove" style={close}></i>
        </Link>
        <div className = "flextry">
          <div className= "firstdiv">
            <img src={tejas1} alt="Avatar" className = "img-circle"></img>
          </div>
          <div className = "seconddiv">
            <div className = "name">
              <span className="yellow-text"><u>Hi</u></span>,&nbsp;I&nbsp;am&nbsp;<u>Tejas</u><span className="yellow-text"><u>&nbsp;Parab</u></span>
            </div>
            <div className = "sm-heading">
              <u>Full&nbsp;Stack&nbsp;Web</u><span className="yellow-text"><u>&nbsp;Developer</u></span>&nbsp;&&nbsp;<u>Programmer</u>
            </div>
          </div>

          <div className = "thirddiv">
            <div className = "fewThings">
              Few&nbsp;<span className="yellow-text">Things&nbsp;</span><span className="yellow-text">about&nbsp;</span>me

            </div>
          </div>
          <div className = "fourthdiv">
            <p>
              <b><u><span className="yellow-text">The short version</span></u>: </b>
              I am Tejas Parab, a graduate student at Northeastern University currently pursuing my Master's degree in Computer Science.
          My most recent work experience was working as a <span className="yellow-text"> Software Engineering Co-op at Peapod Digital Labs. </span>
          I love working with <span className="yellow-text">React, redux, mongoDB, express and node.js</span>. I am also skilled in
              <span className = "yellow-text"> elixir</span> and the <span className = "yellow-text">Phoenix Framework </span>
              having built multiple projects both personal and academic using these technologies.

            </p>
          <p> Through my work experiences and my time at Northeastern, I have gained industrial knowledge, improved software engineering and interpersonal skills. </p>
            <p>
              Here's Lionel Messi telling you my skills:
            </p>
            <img src ={messi} alt ="skills" className="messigif"></img>
            <div>
              <br />
              And here's a more professional way to tell you my skills.
              <button className = "btn-primary btn-block">
                <Link to = "/resume" style={{ textDecoration: 'none', color:'white' }}>
                  Fork Resume
                </Link>
              </button>
            </div>
            <p>
              <br />
              <b><u><span className="yellow-text">The long version</span></u>: </b>
              I love building websites and learn about new technologies in our domain. I have been building websites for over 4 years now. My journey began when I started a blog as
              a 16 year old with a friend of mine back in 2010 <a href={`https://new-world-ro.blogspot.com/`} target="_blank" style = {{color: 'yellow'}}>(Link to the embarrassing blog)</a>.
            </p>

            <p>
              Like any 16 year old, having seen my thoughts being visualized through the blog I yearned to learn more, back then and even today.
            </p>

            <p>
              When not coding or completing assignments, I like watching other coders live streaming their work like,
              Daniel Shiffman's Youtube Channel The Coding Train<a href={`https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw`} target="_blank" style = {{color: 'yellow'}}>(Link to Shiffman's channel)</a>
              &nbsp; or CJ's Coding Garden <a href={`https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw`} target="_blank" style = {{ color: 'yellow'}}>(Link to CJ's channel) </a>. These guys are quite fun and
              also give me another perspective into building websites.
            </p>

            <p>
              Apart from coding, I am also a huge soccer fan and have been supporting Manchester United since 2006 (GGMU!). I like to spend my weekends building something,
              watching soccer or catching up on a movie.
            </p>

          </div>

        </div>
        <Footer />
      </div>

);
}
}

export default AboutPage;
