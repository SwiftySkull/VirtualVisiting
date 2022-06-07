/* eslint-disable max-len */
// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';

// == Import
import './pictureModal.scss';

import OUPS from 'src/assets/images/IMG_3175.JPG';

import { imageUrl } from 'src/utils';

// == Composant
/**
 * Header component
 * @param {object} showedPainting Object of the information of the displayed painting
 * @param {function} selectedPaintingId Id of the selected painting to display to get its informations in the DataBase
 * @param {function} unselectPainting Remove the painting from the screen and the memory
 */
const PictureModal = ({
  showedPainting,
  selectedPaintingId,
  unselectPainting,
}) => {
  const { id } = useParams();

  useEffect(() => {
    selectedPaintingId(id);
  }, []);

  const back = () => {
    window.history.back();
    unselectPainting();
  };

  const backByKey = (evt) => (evt.key === 'Enter' ? window.history.back() : null);

  return (
    <div id="pictureModal">
      <div>
        {showedPainting.id !== undefined && showedPainting.id !== 99999 && (
          <figure>
            <img
              src={imageUrl + showedPainting.picture.pathname}
              alt={showedPainting.title ?? showedPainting.dbName}
            />
            <figcaption>{showedPainting.title ?? showedPainting.dbName} ({showedPainting.date}) - {showedPainting.height}x{showedPainting.width}{showedPainting.size.format !== 'Sans format' ? ` (${showedPainting.size.format})` : ''}</figcaption>
          </figure>
        )}
        {showedPainting.id === 99999 && (
          <img src={OUPS} alt="Cette zone n'est pas encore accessible" />
        )}
        <div className="backButton" onClick={back} onKeyDown={backByKey} title="Revenir à l'exposition" tabIndex="0">
          <p className="cross">+</p>
          <p className="text">Retour</p>
        </div>
      </div>
    </div>
  );
};

PictureModal.propTypes = {
  /** Object of the information of the displayed painting */
  showedPainting: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    dbName: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    size: PropTypes.shape({
      format: PropTypes.string.isRequired,
    }).isRequired,
    picture: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,

  /** Id of the selected painting to display to get its informations in the DataBase */
  selectedPaintingId: PropTypes.func.isRequired,

  /** Remove the painting from the screen and the memory */
  unselectPainting: PropTypes.func.isRequired,
};

PictureModal.defaultProps = {

};

// == Export
export default PictureModal;
