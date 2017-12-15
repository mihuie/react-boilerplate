import { expect } from 'chai'; // eslint-disable-line

import { confirmActions, testActionSequences } from '~/test/util/testUtils.js';

import * as actions from './actions';

describe('COMPONENT :: actions @current', () => {

  /**************************************************
  * Methods
  **************************************************/
  describe('methods', () => {
    const methods = [
      'METHOD',
    ];
    confirmActions({actions, methods});
  });

  /**************************************************
  * State
  **************************************************/
  const getState = ({name}) => ({
    data: {},
    display: {},
    form: {},
  });

  /**************************************************
  * Scenarios
  **************************************************/
  describe('scenarios', () => {
    const scenarios = [
      {
        name: '_ACTION_',
        action:() => actions._ACTION_({id: 'testID', value: 'testValue'}),
        state: getState({

        }),
        expected: [
          {type: '_ACTION_TYPE', id: 'testID', value: 'testValue'},
          {type: '_ACTION_TYPE', id: 'testID', value: false},
        ]
      },
    ];

    testActionSequences(scenarios);
  });
});
