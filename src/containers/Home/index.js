import { connect } from 'react-redux';

import { closeModal } from 'src/actions/mainActions';

import Home from 'src/components/Home';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({

});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /** Close the modal of the painting */
  closeModal: () => {
    dispatch(closeModal());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Home);
