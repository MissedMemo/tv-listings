import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../../src/components/app';

describe( 'Main Layout:', () => {
  
  it( 'should display passed greeting', () => {
    const wrapper = shallow( <App greeting='hi' /> );
    const greeting = wrapper.find('.greeting');
    expect( greeting.text() ).to.equal('hi');
  });

});
