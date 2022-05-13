import {

} from 'src/actions/mainActions';

const initialState = {
  language: 'fr',
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainReducer;
