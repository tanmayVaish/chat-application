import React from 'react';
import './styles/SideNav.css';

import Home from '../assets/home.svg';
import Logo from '../assets/Vector.svg';

import {
  faCommentDots,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-g1">
        <img className="side-nav-i-logo" src={Logo} alt="logo" />
      </div>
      <div className="side-nav-g2">
        <img className="side-nav-i-home" src={Home} alt="home" />
        <FontAwesomeIcon className="side-nav-i-message" icon={faCommentDots} />
        <FontAwesomeIcon className="side-nav-i-cog" icon={faCog} />
      </div>

      <div className="side-nav-g3">
        <FontAwesomeIcon className="side-nav-i-logout" icon={faSignOutAlt} />
      </div>
    </div>
  );
};

export default SideNav;
