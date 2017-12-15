import React from 'react'; // eslint-disable-line
import { shallow, mount, render } from 'enzyme'; // eslint-disable-line
import chai, { expect } from 'chai'; // eslint-disable-line
import sinon from 'sinon';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

import { confirmElements } from '~/test/util/testUtils';

import _COMPONENT_ from './view';

describe('_COMPONENT_ :: View', function() {

  /**************************************************
  * Manifest
  **************************************************/
  const e = {
    mainContainer: {selector: '._SELECTOR_'},
  };

  /**************************************************
  * JSX
  **************************************************/
  const getJSX = props => <_COMPONENT_ {...props} />;
  const getProvider = ({ store, props } = {}) => <Provider store={store}>{getJSX(props)}</Provider>;

  /**************************************************
  * Sinon Methods
  **************************************************/
  const methods = {
    _METHOD_: () => {},
  };

  Object.keys(methods).map(key => sinon.spy(methods, key));

  /**************************************************
  * Mock Store
  **************************************************/
  const getStore = (({_CONFIG_= false}) => mockStore(
    {
      form: {
        _CONFIG_
      }
    }
  ));

  /**************************************************
  * Properties
  **************************************************/
  const getProps = ({_CONFIG_ = false} = {}) => {
    const props = {
      _CONFIG_,
    };

    Object.keys(methods).map(key => props[key] = methods[key]);

    return props;
  };


  describe('rendering', () => {
    const props = getProps({_CONFIG_: '_VALUE_'});
    const wrapper = shallow(getJSX(props));

    it('renders', () => {
      expect(wrapper).to.exist;
    });

    describe('renders expected elements', function () {
      confirmElements({wrapper, elements: e});
    });

  });

  /*
  describe('button', () => {
    const props = getProps({_CONFIG_: '_VALUE_'});
    const wrapper = mount(getJSX(props));

    const btn = wrapper.find(e._ID_.selector);

    it('calls "_METHOD_" with correct arguments', () => {
      btn.simulate('click');
      expect(methods._METHOD_.called).to.be.true;
      expect(methods._METHOD_.getCall(0).args[0]._VALUE1_).to.equal('product1');
    });

    it('links to the _LINK_ page', () => {
      expect(btn).to.have.attr('href', '/#/_LINK_');
    });

  });
  */
});
