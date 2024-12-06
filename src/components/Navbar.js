import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onMenuClick, text }) => {
  return (
    <header className='sticky-top'>
      <nav className="d-flex justify-content-between p-3 align-items-center">
        <div className="d-flex gap-2 align-items-center">
          <FontAwesomeIcon icon={faBars} onClick={onMenuClick} style={{ cursor: 'pointer' }} />
          <h5 className="m-0 fs-16">{text}</h5>
        </div>
        <div>
          <FontAwesomeIcon icon={faBell}/>
        </div>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  onMenuClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Navbar;
