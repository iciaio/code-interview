import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('test test', () => {
  it('test test test', () => {
    expect(1).toEqual(1);
  });
});