import React from 'react'; // eslint-disable-line
import { shallow, mount, render } from 'enzyme'; // eslint-disable-line
import chai, { expect } from 'chai'; // eslint-disable-line
import chaiSubset from 'chai-subset';
chai.use(chaiSubset);

import { testMapState, testMapStateTypes } from '~/test/util/testUtils'; // eslint-disable-line
import { mockGlobals } from '~/test/util/mock';
mockGlobals();

import { mapStateToProps } from './index';

describe('COMPONENT :: mapStateToProps @current', function() {
  
  /**************************************************
  * Store
  **************************************************/
  const getState = (({ _CONFIG_= false } = {}) => (
    {
      data: {

      },

      display: {

      },

      form: {
        _CONFIG_
      },

    }
  ));

  /**************************************************
  * Properties
  **************************************************/
  const getOwnProps = ({ _CONFIG_ = false } = {}) => {
    return {};
  };

  /**************************************************
  * Scenarios
  **************************************************/
  describe('scenarios', () => {
    const scenarios = [
      {
        title: 'Initial state',
        state: {
          _STATE_PROP_: undefined,
        },
        ownProps: {
          _OWN_PROP_: undefined,
        },
        expected: {
          _PROP_: undefined,
        }
      },

      {
        title: 'Completed state',
        state: {
          _PROP_: true,
        },
        ownProps: {
          _OWN_PROP_: true,
        },
        expected: {
          _PROP_: true,
        }
      },
    ];

    testMapState({scenarios, getState, getOwnProps, mapStateToProps});
    // testMapStateTypes({scenarios, getState, getOwnProps, mapStateToProps});

  });

});
