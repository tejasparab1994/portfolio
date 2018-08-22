import React from 'react';
import Page from '../common/Page';
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
  render() {
    return (
      <Page background="#F06060" color= "#fffff">
        <div>
          <Link to ="/" className = "cancelButton">
            <i className="fa fa-remove" style={close}></i>
          </Link>
          <div className = "flextry">
            <div className= "firstdiv">
              <img src={tejas1} alt="Avatar" className = "img-circle"></img>
            </div>
            <div className = "seconddiv">
              <div className = "name">
                <span className="text-secondary"><u>Hi</u></span>,&nbsp;I&nbsp;am&nbsp;<u>Tejas</u><span className="text-secondary"><u>&nbsp;Parab</u></span>
              </div>
              <div className = "sm-heading">
                <u>Full&nbsp;Stack&nbsp;Web</u><span className="text-secondary"><u>&nbsp;Developer</u></span>&nbsp;&&nbsp;<u>Programmer</u>
              </div>
            </div>

            <div className = "thirddiv">
              <div className = "fewThings">
                <u>Few <span className="text-secondary">Things </span><span className="text-secondary">about</span> me</u>

              </div>
            </div>
            <div className = "fourthdiv">
              <p>
                <b><u><span className="text-secondary">The short version</span></u>: </b>
                I am Tejas Parab, a graduate student at Northeastern University currently pursuing my Master's degree in Computer Science.
                I love working with <span className="text-secondary">React, redux, mongoDB, express and node</span>. I am also skilled in
                <span className = "text-secondary">elixir</span> and the <span className = "text-secondary">Phoenix Framework </span>
                having built multiple projects both personal and academic using these technologies.

              </p>
              <img src ={messi} alt ="skills" className="messigif"></img>
              <p>
                <b><u><span className="text-secondary">The longer version</span></u>: </b>
                I love building websites and learn about new technologies in our domain. I have been building websites for over 4 years now. My journey began when I started a blog as
                a 16 year old with a friend of mine back in 2010 <a href={`https://new-world-ro.blogspot.com/`} target="_blank">(Link to the embarrassing blog)</a>.</p>

              <p>
                Like any 16 year old, having seen my thoughts being visualized through the blog I yearned to learn more, back then and even today.
              </p>

              <p>
                When not coding or completing assignments, I like watching other coders live streaming their work like,
                Daniel Shiffman's Youtube Channel The Coding Train<a href={`https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw`} target="_blank">(Link to Shiffman's channel)</a>
                or CJ's Coding Garden<a href={`https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw`} target="_blank">(Link to CJ's channel)</a>. These guys are quite fun and
                also give me another perspective into building websites.
              </p>

              <p>
                Apart from coding, I am also a huge soccer fan and have been supporting Manchester United since 2006 (GGMU!). I spend my weekends building something,
                watching soccer or catching up on a movie.
              </p>

            </div>

          </div>
          <div>
            <Footer />
          </div>
        </div>

      </Page>
    );
  }
}

export default AboutPage;
