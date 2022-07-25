import React from 'react';
import './skills.css';
import css from '../images/css.png';
import sass from '../images/sass.png';
import html from '../images/html.png';
import js from '../images/javascript.png';
import react from '../images/react.png';
import nextjs from '../images/nextjs.png';
// import { useSpring, animated } from 'react-spring';

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="skillset__title">Skills</h1>
      <div className="skills__container">
        <div className="skills__item">
          <h2 className="skills__title">React</h2>
          <img className="skills__img" src={react} alt="react" />
        </div>
        <div className="skills__item">
          <h2 className="skills__title">Next.js</h2>
          <img className="skills__img" src={nextjs} alt="next.js" />
        </div>
        <div className="skills__item">
          <h2 className="skills__title">JavaScript</h2>
          <img className="skills__img" src={js} alt="javascript" />
        </div>

        <div className="skills__item">
          <h2 className="skills__title">CSS</h2>
          <img className="skills__img" src={css} alt="css" />
        </div>
        <div className="skills__item">
          <h2 className="skills__title">HTML</h2>
          <img className="skills__img" src={html} alt="html" />
        </div>

        <div className="skills__item">
          <h2 className="skills__title">SASS</h2>
          <img className="skills__img" src={sass} alt="sass" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
