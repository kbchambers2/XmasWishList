import React from 'react'
import Masonry from 'react-masonry-component'
import WishCard from './WishCard'

const WishCards = (props) => (
	<Masonry
        className={'gallery'}
        elementType={'ul'}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
    >
		{
			props.products.map((product, index) => (
				<li key={index}><WishCard product={product} removeWish={props.removeWish} markAsPurchased={props.markAsPurchased}/></li>
			))
		}
    </Masonry>
)

export default WishCards
