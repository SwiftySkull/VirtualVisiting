import {
  SAVE_PAINTING,
  UNSELECT_PAINTING,
} from 'src/actions/mainActions';

const initialState = {
  language: 'fr',
  showedPainting: {},
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_PAINTING:
      return {
        ...state,
        showedPainting: action.painting,
      };

    case UNSELECT_PAINTING:
      return {
        ...state,
        showedPainting: {},
      };

    default:
      return state;
  }
}

export default mainReducer;
