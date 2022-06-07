import { connect } from 'react-redux';

import {

} from 'src/actions/mainActions';

import App from 'src/components/App';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({

});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Change the language of the website
   *
   * @param {string} language Language chosen by the user
   */
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
