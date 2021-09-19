import React from 'react';
import { Link } from 'react-router-dom';

import Blogs from '../layouts/Main';

const Index = () => (
  <Main
    description={"SAIKIRAN GONUGUNTA's personal website. Trainee Software Engineer at IVY Comptech. Bachelors in Technology from KL University"}
  >
    <article className="post" id="blogs">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hi! I am Saikiran Gonugunta</Link></h2>
          <h3>I am passionate Full-stack Web Developer</h3>
        </div>
      </header>
      <p>Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Blogs;
