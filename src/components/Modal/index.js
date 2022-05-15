// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

// == Import
import './modal.scss';

// == Composant
/**
 * Footer component
 */
const Modal = ({
  modal,
  closeModal,
}) => {
  useEffect(() => {

  }, []);

  return (
    <div
      id="modal"
      style={{
        display: modal ? 'flex' : 'none',
      }}
    >
      <div className="explication-text">
        <ul>
          <li>Lors de votre visite vous aurez des flèches pour tourner</li>
          <li>Un cercle blanc apparait en bas de votre écran pour avancer ou reculer suivant la situation.</li>
          <li>Vous pouvez appuyer sur les tableaux ou les textes pour les agrandir/les lire.</li>
        </ul>
      </div>
      <button type="button" onClick={closeModal}>Commencer la visite</button>
    </div>
  );
};

Modal.propTypes = {
  modal: PropTypes.bool.isRequired,

  closeModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {

};

// == Export
export default Modal;
