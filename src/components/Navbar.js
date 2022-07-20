import React, { useState } from 'react';
import './navbar.css';
import Home from './Home';
import { animated, useSpring } from 'react-spring';
import me from '../images/me.jpg';

function Navbar() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');
  const navToggle = () => {
    if (active === 'nav__menu') {
      setActive('nav__menu nav__active');
    } else setActive('nav__menu');

    // Icon Toggler
    if (icon === 'nav__toggler') {
      setIcon('nav__toggler toggle');
    } else setIcon('nav__toggler');
  };

  const style1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  const style2 = useSpring({
    from: { opacity: 0, marginRight: -500 },
    to: { opacity: 1, marginRight: 0 },
    delay: 500,
  });

  const navbar1 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 400,
  });

  const navbar2 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 500,
  });

  const navbar3 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 600,
  });

  const navbar4 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 700,
  });

  const navbar5 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 800,
  });

  const navbar6 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 900,
  });

  const navbar7 = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 1000,
  });

  return (
    <animated.div style={style1}>
      <div className="navbar" id="home">
        <nav className="nav">
          <div className="avatar__container">
            <img className="avatar" src={me} alt="avatar" />

            <animated.div style={navbar1}>
              <p className="avatar__name">
                Sebastian Perrone{' '}
                <b>
                  {' '}
                  <i className="avatar__frontend">|FRONT-END DEVELOPER</i>
                </b>{' '}
              </p>
            </animated.div>
          </div>

          <ul className={active}>
            <animated.div style={navbar2}>
              <li className="nav__item" onClick={navToggle}>
                <a href="#home" className="nav__link">
                  Home
                </a>
              </li>
            </animated.div>
            <animated.div style={navbar3}>
              <li className="nav__item" onClick={navToggle}>
                <a href="#aboutMe" className="nav__link">
                  About Me
                </a>
              </li>
            </animated.div>
            <animated.div style={navbar4}>
              <li className="nav__item" onClick={navToggle}>
                <a href="#projects" className="nav__link">
                  Projects
                </a>
              </li>
            </animated.div>
            <animated.div style={navbar5}>
              <li className="nav__item" onClick={navToggle}>
                <a href="#skills" className="nav__link">
                  Skills
                </a>
              </li>
            </animated.div>
            <animated.div style={navbar6}>
              <li className="nav__item" onClick={navToggle}>
                <a href="#resume" className="nav__link">
                  Resume
                </a>
              </li>
            </animated.div>
            <animated.div style={navbar7}>
              <li className="nav__item" onClick={navToggle}>
                <a href="#contact" className="nav__link">
                  Contact Me
                </a>
              </li>
            </animated.div>
          </ul>
          <div onClick={navToggle} className={icon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
        <section>
          <animated.div style={style2}>
            <Home />
          </animated.div>
        </section>
      </div>
    </animated.div>
  );
}

export default Navbar;
