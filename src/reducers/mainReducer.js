import {
  SAVE_PAINTING,
  UNSELECT_PAINTING,
  CLOSE_MODAL,
} from 'src/actions/mainActions';

const initialState = {
  language: 'fr',
  showedPainting: {},
  modal: true,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };

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
