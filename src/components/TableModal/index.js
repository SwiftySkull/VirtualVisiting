// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router';

// == Import
import './tableModal.scss';

import tableIDs from 'src/data/tableIDs';

// == Composant
/**
 * Header component
 */
const TableModal = ({

}) => {
  const { id } = useParams();

  useEffect(() => {

  }, []);

  const xxx = tableIDs.find((paint) => paint.id === Number(id));

  const back = () => {
    window.history.back();
  };

  const backByKey = (evt) => (evt.key === 'Enter' ? window.history.back() : null);

  return (
    <div id="tableModal">
      <div>
        <img src={xxx.painting} alt="" />
        <div className="backButton" onClick={back} onKeyDown={backByKey} title="Revenir à l'exposition" tabIndex="0">
          <p className="cross">+</p>
          <p className="text">Retour</p>
        </div>
      </div>
    </div>
  );
};

TableModal.propTypes = {

};

TableModal.defaultProps = {

};

// == Export
export default TableModal;
