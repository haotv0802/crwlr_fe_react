import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Collected Data</Link>
      {" | "}
      <Link to="/about" activeClassName="active">Chart</Link>
      <LoadingDots interval={100} dots={10}/>
    </nav>
  );
};

export default Header;
