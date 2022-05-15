// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

// == Import
import Modal from 'src/containers/Modal';

import './visite.scss';

import { all } from 'src/data';

// == Composant
/**
 * Visite component
 */
const Visite = ({
  
}) => {
  useEffect(() => {

  }, []);

  const { salle, orientation } = useParams();

  const back = () => {
    window.history.back();
  };

  const backByKey = (evt) => (evt.key === 'Enter' ? window.history.back() : null);

  return (
    <div id="visite">
      <div className="visite">
        <div className="picture">
          <img src={all[salle][orientation].image} alt="" />
          {/* <div className="tableau info" tabIndex="0" /> */}
          {all[salle][orientation].actions?.map((act) => (
            <Link
              className="info"
              to={act.painting}
              style={{
                height: `calc(${act.style.height} * 100% / 837)`,
                top: act.style.top !== undefined ? `calc(${act.style.top} * 100% / 837)` : '',
                bottom: act.style.bottom !== undefined ? `calc(${act.style.bottom} * 100% / 837)` : '',
                width: `calc(${act.style.width} * 100% / 627)`,
                left: act.style.left !== undefined ? `calc(${act.style.left} * 100% / 627)` : '',
                right: act.style.right !== undefined ? `calc(${act.style.right} * 100% / 627)` : '',
              }}
              title="Observer en détail"
              key={act.painting}
            />
          ))}
        </div>
        {all[salle][orientation].leftTurn.id && (
          <Link to={all[salle][orientation].leftTurn.link} className="turn-left arrow" title="Se tourner vers la gauche"><div className="pointe" /><div className="bout" /></Link>
        )}
        {all[salle][orientation].rightTurn.id && (
          <Link to={all[salle][orientation].rightTurn.link} className="turn-right arrow" title="Se tourner vers la droite"><div className="bout" /><div className="pointe" /></Link>
        )}
        {all[salle][orientation].mouvement && all[salle][orientation].mouvementLink !== 'Back' && all[salle][orientation].mouvementLink !== 'Margoni' && (
          <Link to={all[salle][orientation].mouvementLink} className="go-forward arrow" value="" title="Se déplacer"><div className="intern-go" /></Link>
        )}
        {all[salle][orientation].mouvement && all[salle][orientation].mouvementLink === 'Margoni' && (
          <a href="https://denise-margoni.fr/" target="_blank" rel="noreferrer noopener" className="go-forward arrow" title="Se déplacer"><p className="intern-go" /></a>
        )}
        {all[salle][orientation].mouvement && all[salle][orientation].mouvementLink === 'Back' && (
          <div onClick={back} onKeyDown={backByKey} className="go-forward arrow" value="" title="Se déplacer"><div className="intern-go" /></div>
        )}
      </div>
      <Modal />
    </div>
  );
};

Visite.propTypes = {

};

Visite.defaultProps = {

};

// == Export
export default Visite;
