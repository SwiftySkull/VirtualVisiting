// == Import npm
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes } from 'react-router-dom';

// == Import
import Home from 'src/containers/Home';
import Visite from 'src/containers/Visite';
import PictureModal from 'src/containers/PictureModal';
import TableModal from 'src/containers/TableModal';
import TextDisplay from 'src/containers/TextDisplay';
import Header from 'src/containers/Header';

import './app.scss';

// == Composant
/**
 * Application component
 *
 */
const App = () => {
  useEffect(() => {

  }, []);

  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/peinture/:id" element={<PictureModal />} />
        <Route path="/dessins-table/:id" element={<TableModal />} />
        <Route path="/lecture/:texte" element={<TextDisplay />} />
        <Route path="/:salle/:orientation" element={<Visite />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

// App.propTypes = {

// };

// App.defaultProps = {

// };

// == Export
export default App;
