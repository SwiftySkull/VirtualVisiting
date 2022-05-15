// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router';

// == Import
import './textDisplay.scss';

import textDisplay from 'src/data/textDisplay';

import { createMarkup } from 'src/utils';

// == Composant
/**
 * Header component
 */
const TextDisplay = ({

}) => {
  const { texte } = useParams();

  useEffect(() => {

  }, []);

  const back = () => {
    window.history.back();
  };

  const foundText = textDisplay.find((text) => texte === text.name);

  return (
    <div id="textDisplay">
      <div className="content" dangerouslySetInnerHTML={createMarkup(foundText.content)} />
      <button type="button" onClick={back}>Retour à la visite</button>
    </div>
  );
};

TextDisplay.propTypes = {

};

TextDisplay.defaultProps = {

};

// == Export
export default TextDisplay;
