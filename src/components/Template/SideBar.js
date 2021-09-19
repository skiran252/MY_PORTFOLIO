import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>SAIKIRAN GONUGUNTA</h2>
        <p><a href="mailto:skiran252@gmail.com">skiran252@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m SAIKIRAN.
        I am a passionate Full-Stack Web Developer
        Graduated from <a href="https://kluniversity.in">KL University</a>
        i currently work at <a href="https://www.ivy.global/">IVY COMPTECH</a> as Trainee Software Engineer.
        previously worked at , <a href="https://voxlogic.io">VoxLogic</a> as Software Developer Intern
      </p>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; SAIKIRAN GONUGUNTA <Link to="/">.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
