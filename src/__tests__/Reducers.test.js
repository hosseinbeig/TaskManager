// import React from 'react';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import reducer from '../reducers/todoReducer';
import * as actionTypes from '../actions/types';

// configure({ adapter: new Adapter() });

describe('Todo Reducers', () => {
  let initialState = {
    cards: [
      {
        todo: []
      }
    ],
    loading: false,
    message: ''
  };
  it('should return the initial state', () => {
    expect(reducer(initialState, {})).toEqual({
      cards: [
        {
          todo: []
        }
      ],
      loading: false,
      message: ''
    });
  });
  it('should change the loading to true', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_TODOS_INIT,
        loading: true
      })
    ).toEqual({
      cards: [
        {
          todo: []
        }
      ],
      loading: true,
      message: ''
    });
  });
});
