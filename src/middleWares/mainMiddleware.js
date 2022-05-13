/* eslint-disable no-console */
import axios from 'axios';

import {
  SELECTED_PAINTING_ID,
  savePainting,
} from 'src/actions/mainActions';

// URL for the Axios requests
// export const URL = 'http://localhost:8080/api';
export const URL = 'https://back.denise-margoni.fr/api';

/**
 * MiddleWare for the main and authentification area.
 */
const mainMiddleware = (store) => (next) => (action) => {
  const state = store.getState();

  switch (action.type) {
    case SELECTED_PAINTING_ID:
      axios.get(`${URL}/visite-virtuelle/${action.id}`)
        .then((response) => {
          store.dispatch(savePainting(response.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(savePainting({ id: 99999 }));
        });

      next(action);
      break;

    // Default action.
    default:
      next(action);
  }
};

export default mainMiddleware;
