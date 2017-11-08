import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {"  |  "}
      <Link to="/collectedData" activeClassName="active">Collected Data</Link>
      {"  |  "}
      <Link to="/chart" activeClassName="active">Chart</Link>
    </nav>
  );
};

export default Header;
