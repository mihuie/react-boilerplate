import React from 'react'; // eslint-disable-line
import { shallow, mount, render } from 'enzyme'; // eslint-disable-line
import chai, { expect } from 'chai'; // eslint-disable-line
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { confirmElements } from '../../test/util/testUtils';

import _REDUCER_ from '../reducers/_REDUCER_';

import _COMPONENT_ from './index';

describe('_COMPONENT_ :: Component', function() {
  let mockStore = configureMockStore();
  let wrapper, store;

  let initialState = {
    reducer: _REDUCER_(),
  };

  store = mockStore(initialState);

  wrapper = mount (
    <Provider store={store}><_COMPONENT_/></Provider>
  );

  describe('rendering', () => {
    it('renders', () => {
      expect(wrapper).to.be.ok;
    });

    describe('renders expected elements', function () {
      const e = {
        main: {name: 'main container', selector: '.login'},
        title: {name: 'title', selector: '.text-title'},
      };

      confirmElements({wrapper, elements: e});
    });

  });
});
