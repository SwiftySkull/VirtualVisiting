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
        <div className="explication-modal">
          <div className="explication-text">
            <ul>
              <li>Lors de votre visite vous aurez des flèches pour tourner</li>
              <li>Un cercle blanc apparait en bas de votre écran pour avancer ou reculer suivant la situation.</li>
              <li>Vous pouvez appuyer sur les tableaux ou les textes pour les agrandir/les lire.</li>
            </ul>
          </div>
          <Link to="/Entree/N"><button type="button">Commencer la visite</button></Link>
        </div>
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
