// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router';

// == Import
import './pictureModal.scss';

import OUPS from 'src/assets/images/IMG_3175.JPG';

import { imageUrl } from 'src/utils';

// == Composant
/**
 * Header component
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
        {showedPainting.id == 99999 && (
          <img src={OUPS} alt="Cette zone n'est pas encore accessible" />
        )}

        {/* <img src={imageUrl + showedPainting.picture.pathname} alt="" /> */}
        <div className="backButton" onClick={back} onKeyDown={backByKey} title="Revenir à l'exposition" tabIndex="0">
          <p className="cross">+</p>
          <p className="text">Retour</p>
        </div>
      </div>
    </div>
  );
};

PictureModal.propTypes = {
  // paintings: PropTypes.array.isRequired,

  showedPainting: PropTypes.object.isRequired,

  selectedPaintingId: PropTypes.func.isRequired,

  unselectPainting: PropTypes.func.isRequired,
};

PictureModal.defaultProps = {

};

// == Export
export default PictureModal;
