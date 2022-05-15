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
      <div>
        <p style={{ fontSize: '1.2rem' }}>Bienvenue dans la visite virtuelle de la</p>
        <h1 style={{ fontSize: '1.5rem' }}>Rétrospective Denise Margoni</h1>
      </div>
      <nav>
        <Link to="/">Retour à l'entrée</Link>
        <a href="https://denise-margoni.fr/" target="_blank" rel="noreferrer noopener">Site officiel</a>
      </nav>
    </div>
  );
};

Header.propTypes = {

};

Header.defaultProps = {

};

// == Export
export default Header;
