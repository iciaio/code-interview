import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import FunctionalApp from "./FunctionalApp";
import {ClassApp} from "./ClassApp";

Enzyme.configure({ adapter: new Adapter() })

const isbnInputs = {
  correct: "1-2344-5678-9",
  letter: "a-1234-5678-0",
  tooShort: "1-1111-1111-",
  tooLong: "1-1111-1111-11",
  noDashes: "1123456789"
}

const inputEvent = (input) => ({
  target: {
    value: input
  }
});

describe('Functional App', () => {
  it('should disable delete button if isbn is incorrectly formatted', () => {
    const wrapper = shallow(<FunctionalApp/>);
    const textInput = wrapper.find('input[name="bookToDelete"]');

    textInput.simulate('change', inputEvent(isbnInputs.correct))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeFalsy();

    textInput.simulate('change', inputEvent(isbnInputs.tooLong))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();

    textInput.simulate('change', inputEvent(isbnInputs.tooShort))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();

    textInput.simulate('change', inputEvent(isbnInputs.noDashes))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();

    textInput.simulate('change', inputEvent(isbnInputs.letter))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();
  });
});

describe('Class App', () => {
  it('should disable delete button if isbn is incorrectly formatted', () => {
    const wrapper = shallow(<ClassApp/>);
    const textInput = wrapper.find('input[name="bookToDelete"]');

    textInput.simulate('change', inputEvent(isbnInputs.correct))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeFalsy();

    textInput.simulate('change', inputEvent(isbnInputs.tooLong))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();

    textInput.simulate('change', inputEvent(isbnInputs.tooShort))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();

    textInput.simulate('change', inputEvent(isbnInputs.noDashes))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();

    textInput.simulate('change', inputEvent(isbnInputs.letter))
    expect(
      wrapper.find('button[name="deleteButton"]').prop('disabled'),
    ).toBeTruthy();
  });
});
