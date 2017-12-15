import { combineReducers } from 'redux';

import data from './data';
import display from './display';
import form from './form';

export default combineReducers({
  data,
  display,
  form,
});
