import chai, { expect } from 'chai'; // eslint-disable-line
import chaiSubset from 'chai-subset';
import {testReducer} from '../../test/util/testUtils';

chai.use(chaiSubset);

import REDUCER from './REDUCER';

describe('REDUCER reducer', () => {
  const scenarios = [
    {
      state: {},
      action: {type: 'ACTION_TYPE', value: 'value'},
      expected: {key: 'value'}
    },
  ];

  testReducer(REDUCER, scenarios);
});
