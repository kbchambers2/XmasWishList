import React, { Component } from 'react';
import base from '../config/Rebase';
import AlertContainer from 'react-alert';
import WishCards from './WishCards';
import Navbar from '../components/NavBar';

class FriendWishes extends Component {
	constructor() {
		super()
		this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'light',
      time: 5000,
      transition: 'fade'
    };
		this.state = {products: []}
		this.markAsPurchased = this.markAsPurchased.bind(this)
		this.showAlert = this.showAlert.bind(this)
	}
	componentDidMount() {
		this.ref = base.syncState(`/${this.props.params.uid}/wishList`, {
			context: this,
			state: 'products',
			asArray: true
		});
	}
	componentWillUnmount() {
		base.removeBinding(this.ref)
	}
	markAsPurchased(productId) {
		let updatedProduct = this.state.products.filter(product => product.listing_id === productId).shift()
		updatedProduct.isPurchased = true
		this.setState({
			products: [
				...this.state.products.filter(product => product.listing_id !== productId),
				updatedProduct
			]
		})
		this.showAlert()
	}
	showAlert(){
    this.msg.show('Marked as purchased!', {
      time: 2000,
      type: 'success',
      icon: <i className="fa fa-check" style={{color: "green"}} aria-hidden="true"></i>
    });
  }
	render() {
		let filteredProducts = this.state.products.filter(product => !product.isPurchased)
		return (
			<div>
				<Navbar/>
				<AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
				<h1>FriendWishes</h1>
				<WishCards products={this.state.products} markAsPurchased={this.markAsPurchased}/>
			</div>
		)
	}
}

export default FriendWishes;
