// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import './home.scss';

import Entree from 'src/assets/images/Canon/IMG_4064.JPG';

// == Composant
/**
 * Home component
 */
const Home = ({

}) => {
  useEffect(() => {

  }, []);

  return (
    <div id="home">
      <div className="entry-picture">
        <img src={Entree} alt="" />
        <Link to="/Entree/N"><button type="button">Commencer la visite</button></Link>
      </div>
    </div>
  );
};

Home.propTypes = {

};

Home.defaultProps = {

};

// == Export
export default Home;
