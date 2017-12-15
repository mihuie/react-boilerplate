import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions';
import View from './view';

export const mapStateToProps = (state, ownProps) => {
  return {
    prop: null,
  };
};

const boundActions = dispatch => bindActionCreators(actions, dispatch);
export default connect(mapStateToProps, boundActions)(View);
