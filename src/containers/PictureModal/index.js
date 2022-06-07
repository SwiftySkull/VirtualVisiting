import { connect } from 'react-redux';

import {
  selectedPaintingId,
  unselectPainting,
} from 'src/actions/mainActions';

import PictureModal from 'src/components/PictureModal';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  showedPainting: state.main.showedPainting,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Get the informations of the painting in the DataBase
   * @param {*} id ID of the painting selected
   */
  selectedPaintingId: (id) => {
    dispatch(selectedPaintingId(id));
  },

  /**
   * Remove the painting from the screen and the memory
   */
  unselectPainting: () => {
    dispatch(unselectPainting());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(PictureModal);
