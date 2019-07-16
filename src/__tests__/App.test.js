import React from 'react';
import ReactDOM from 'react-dom';

import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import App from '../App';
import TodosContainer from '../containers/todosContainer';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Showing todocontainer in Appjs', () => {
  expect(wrapped.find(TodosContainer).length).toEqual(1);
});
