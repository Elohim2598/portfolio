import React from 'react';
import './aboutMe.css';

function AboutMe() {
  return (
    <div className="aboutme" id="aboutMe">
      <h1 className="aboutme__title">About Me</h1>
      <div className="aboutme__info">
        <div className="aboutme__list">
          <ul className="aboutme__ul">
            <li className="li__item">
              Full Name:{' '}
              <b>
                <i>Sebastian Elohim Perrone</i>
              </b>
            </li>
            <li className="li__item">
              Location:
              <b>
                <i>Cochabamba, Bolivia</i>
              </b>
            </li>
            <li className="li__item">
              <a href="mailto:elohim2598@gmail.com">
                Email:{' '}
                <b>
                  <i>elohim2598@gmail.com </i>
                </b>
              </a>
            </li>
          </ul>
        </div>

        <div className="story__container">
          <h3 className="story__container__title">Hello there!</h3>
          <p className="story__p">
            I'm Sebastian Perrone, a Front End Developer. My strengths rely on
            my creativity, teamwork, and my will to improve not only as a
            developer, but as a human being. I'm a person who is always looking
            for new challenges and opportunities to learn and grow. From a young
            age, I've always been interested in technology and how it can be
            used to solve problems. When I was at school, even when everybody
            else went home I used to stay at the computer lab to learn how to
            code C++, I was always amazed by the possibilities that technology
            had to offer.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
