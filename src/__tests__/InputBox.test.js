import React from 'react';

import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import AddTodo from '../components/AddTodo';
// import Root from '../Root';

let wrapped;
beforeEach(() => {
  wrapped = mount(<AddTodo />);
});
afterEach(() => {
  wrapped.unmount();
});
it('has form with label and input ', () => {
  expect(wrapped.find('form').length).toEqual(1);
  expect(wrapped.find('label').length).toEqual(1);
  expect(wrapped.find('input').length).toEqual(1);
});

describe('text input', () => {
  beforeEach(() => {
    wrapped.find('input').simulate('change', {
      target: { value: 'new text' }
    });
    wrapped.update();
  });
  it('has text input that user can type in ', () => {
    expect(wrapped.find('input').prop('value')).toEqual('new text');
  });
});
