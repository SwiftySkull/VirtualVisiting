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
  selectedPaintingId: (id) => {
    dispatch(selectedPaintingId(id));
  },

  unselectPainting: () => {
    dispatch(unselectPainting());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(PictureModal);
