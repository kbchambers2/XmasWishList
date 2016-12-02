import React from 'react';
import WishCards from './WishCards'
import Navbar from '../components/NavBar';

const MyWishes = (props) => (
	<div>
		<Navbar/>
		<h1>MyWishes</h1>
		<WishCards {...props}/>
	</div>
)

export default MyWishes;
