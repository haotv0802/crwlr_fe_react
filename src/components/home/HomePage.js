import React from 'react';
import {Link} from 'react-router';
import logo from '/src/assets/images/logo.jpg';

class HomePage extends React.Component {
  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
        </div>
        <div className="panel-body"  >
          <div className="row" >
            <img src={logo}
                 className="img-responsive center-block"
                 style={{maxHeight:'300px', paddingBottom:'50px'}}/>
          </div>
        </div>
        <div className="bubblingG">
          <span id="bubblingG_1">
          </span>
            <span id="bubblingG_2">
          </span>
            <span id="bubblingG_3">
          </span>
        </div>
      </div>
    );
  }
}

export default HomePage;
