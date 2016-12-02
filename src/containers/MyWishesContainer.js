import React, { Component } from 'react'
import base from '../config/Rebase'
import MyWishes from '../components/MyWishes'

class MyWishesContainer extends Component {
	constructor() {
		super()
		this.state = {myWishes: []}
		this.removeWish = this.removeWish.bind(this)
	}
	componentDidMount() {
		base.onAuth(user => {
			this.ref = base.syncState(`/${user.uid}/wishList`, {
				context: this,
				state: 'myWishes',
				asArray: true
			})
		})
	}
	componentWillUnmount(){
    base.removeBinding(this.ref);
  }
	removeWish(wishId) {
		this.setState({
			myWishes: this.state.myWishes.filter(wish => wish.listing_id !== wishId)
		})
	}
	render() {
		//console.log(this.state.myWishes)
		return (
			<MyWishes
				products={this.state.myWishes}
				handleClick={this.removeWish}/>
		)
	}
}

export default MyWishesContainer
