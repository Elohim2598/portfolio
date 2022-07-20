import React from 'react';
import './resume.css';

function Resume() {
  return (
    <div className="resume" id="resume">
      <div className="title-container">
        <div className="name-container">
          <h1 className="name">SEBASTIAN ELOHIM PERRONE</h1>
          <h3 className="captionthis">
            <i>| FRONT END DEVELOPER</i>
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="columnleft">
          <div className="skill-container">
            <h2 className="resume-titles">SKILLS</h2>
            <ul className="courses">
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>Next.js</li>
              <li>React</li>
            </ul>
          </div>
          <br></br>
          <div className="education-container">
            <h2 classname="resume-titles">EDUCATION</h2>
            <ul className="courses">
              <li>Hughes Schools (bilingual education)</li>
              <br />
              <li>
                Qualified for finals at 2014C++ coding Olympics atschool.
                (Plurinacionales)
              </li>
            </ul>
          </div>
        </div>
        <div className="columnright">
          <div className="profile-container">
            <h2 classname="resume-titles">PROFILE</h2>
            <p>
              I'm a self-taught Front-End developer, always learning so I can
              deliver more than expected. I've always been passionate about
              programming, when I was at school I remember I used to stay at the
              computer lab writing C++ and learning from YouTube even when
              everybody else went home, for me that was the most enjoyable time
              of the day. Now, that feeling when I'm at my PC learning and
              coding hasn't changed a bit.{' '}
            </p>
            <br />
            <p>
              I'm committed to become a dependable and valuable team member,
              love the teamwork and communicating with people to effectively
              serve your company. One of my major motivations is my passion to
              find simple solutions to complex problems.{' '}
            </p>
          </div>
          <div className="courses-container">
            <br></br>
            <h2 classname="resume-titles">COURSES</h2>
            <h3 className="inst">Codecademy (November-December 2021)</h3>
            <ul className="courses">
              <li>Learn CSS</li>
              <li>Learn HTML</li>
              <li>Learn JavaScript</li>
              <li>Learn Intermediate JavaScript</li>
              <li>Learn Intermediate CSS</li>
              <li>Learn React</li>
            </ul>
            <h3 className="inst">Srimba (January-March 2022)</h3>
            <ul className="courses">
              <li>Learn Flexbox" with Per Harald Borgen</li>
              <li>"Learn CSS Grid" with Per Harald Borgen</li>
              <li>"Learn JavaScript" with Per Harald Borgen</li>
              <li>"Learn TypeScript" with Ania Kubow</li>
              <li>"Learn React JS" with Bob Ziroll</li>
            </ul>
            <h3 className="inst">Srimba (January-March 2022)</h3>
            <ul className="courses">
              <li>Learn Flexbox" with Per Harald Borgen</li>
              <li>"Learn CSS Grid" with Per Harald Borgen</li>
              <li>"Learn JavaScript" with Per Harald Borgen</li>
              <li>"Learn TypeScript" with Ania Kubow</li>
              <li>"Learn React JS" with Bob Ziroll</li>
            </ul>
            <h3 className="inst">freeCodeCamp (March-Present)</h3>
            <ul className="courses">
              <li>
                "Give your CSS superpowers by learning Sass" with codeSTACKr
              </li>
              <li>"Git and GitHub Crash Course" with Gwen Faraday</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
