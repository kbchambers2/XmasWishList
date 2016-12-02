import React from 'react';
import ReactDOM from 'react-dom';
import MyWishes from './MyWishes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const products = [{id: 1, name: "ProductA", price: 220}, {id: 2, name: "ProductB", price: 110}];
  const removeWish = (wishId) => console.log(wishId);
  ReactDOM.render(<MyWishes products={products} removeWish={removeWish}/>, div);
});