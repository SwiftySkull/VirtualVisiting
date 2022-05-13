// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import './header.scss';

// == Composant
/**
 * Header component
 */
const Header = ({

}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="header">
      <p>Bienvenue dans la visite virtuelle de la Rétrospective Denise Margoni</p>
    </div>
  );
};

Header.propTypes = {

};

Header.defaultProps = {

};

// == Export
export default Header;
