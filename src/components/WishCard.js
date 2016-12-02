import React, { Component } from 'react'
import { Link } from 'react-router'
import { Image, Button } from 'react-bootstrap'
import jsonp from 'jsonp'

const defaultStyle = {
  borderBottom: "1px solid #e5e1db"
}

const button = (product, removeWish, markAsPurchased) => {
  let colorStyle
  if (removeWish) {
    colorStyle = "danger"
    return (
      <div style={{...defaultStyle, borderBottom: 0}}>
        <Button
          bsStyle={colorStyle}
          onClick={removeWish.bind(null, product.listing_id)}
        >
          Remove
        </Button>
      </div>
    )
  } else if (markAsPurchased) {
    colorStyle = product.isPurchased ? "warning" : "success"
    return (
      <div style={{...defaultStyle, borderBottom: 0}}>
        <Button
          bsStyle={colorStyle}
          onClick={markAsPurchased.bind(null, product.listing_id)}
        >
          {product.isPurchased ? "Already Purchased" : "Mark as Purchased"}
        </Button>
      </div>
    )
  }
}

class WishCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageURL: ''
    }
  }

  componentDidMount() {
    if (!this.props.product.Images) {
      let self = this;
      jsonp("https://openapi.etsy.com/v2/listings/" + this.props.product.listing_id + "/images.js?&api_key=kblh8c5ktm9s8x1qv5o95yyz", null, function(err, data) {
          //console.log("info data is", data);
          //console.log(data.results[0].url_170x135);
          self.setState({
            imageURL: data.results[0].url_170x135
          })
      })
    } else {
      this.setState({imageURL: this.props.product.Images[0].url_170x135})
    }
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.product.Images) {
      let self = this;
      jsonp("https://openapi.etsy.com/v2/listings/" + nextProps.product.listing_id + "/images.js?&api_key=kblh8c5ktm9s8x1qv5o95yyz", null, function(err, data) {
          //console.log("info data is", data);
          //console.log(data.results[0].url_170x135);
          self.setState({
            imageURL: data.results[0].url_170x135
          })
      })
    } else {
      this.setState({imageURL: nextProps.product.Images[0].url_170x135})
    }
  }

  render(){
    let {product, removeWish, markAsPurchased} = this.props
    let firstTwelveWords = product.description.split(" ").slice(0, 12).join(" ");
    return(
        <div style={{width: "170px", backgroundColor: "#FAF9F7", boxShadow: "0 0 5px #e4e0d7", margin: "0 10px 20px 10px"}}>
          <Link to={'/info/' + product.listing_id}>
            <Image
              responsive
              src={this.state.imageURL}
              style={defaultStyle}/>
            <p
              style={{...defaultStyle, borderBottom: 0}}
            >
              {firstTwelveWords}...
            </p>
            <h3 style={defaultStyle}>${product.price}</h3>
            <h2 style={{...defaultStyle, fontSize: "12px"}}>{product.title}</h2>
          </Link>
          {button(product, removeWish, markAsPurchased)}
        </div>
    )
  }
}

export default WishCard
