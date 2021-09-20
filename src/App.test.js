  
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import card from './card/card'
import list from './list/list'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render the DOM and a card', () => {
  expect(card()).toBe(true);
});

it('it should render multiple cards', () => {
  expect(list.length()).toBe(true);
})