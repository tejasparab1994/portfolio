import React from 'react';
import Page from '../common/Page';
import {Link} from 'react-router-dom';
import tejas1 from './tejas1.jpeg';

const close = {
  fontSize: '40px',
  color: 'white'
};

class AboutPage extends React.Component {
  render() {
    return (
      <Page background="#F06060" color= "#fffff">
        <div className = "container">
          <Link to ="/" className = "cancelButton">
            <i className="fa fa-remove" style={close}></i>
          </Link>

          <div  className = "aboutPage">
            <img src={tejas1} alt="Avatar" className = "img-circle"></img>
            <div className = "name">
              <div className="size-inc">

                <span className="text-secondary"><u>Hi</u></span>, I am <u>Tejas </u><span className="text-secondary"> <u>Parab</u></span></div>
              <div className = "sm-heading"><u>Full Stack Web </u><span className="text-secondary"><u>Developer</u></span> & <u>Programmer</u></div>
            </div>

            <div className="explain">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              </p>
            </div>

          </div>
        </div>
      </Page>
      );
    }
  }

export default AboutPage;
