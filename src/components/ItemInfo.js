import React, {Component} from 'react';
import jsonp from 'jsonp';
import base from '../config/Rebase';
import Navbar from '../components/NavBar';



class ItemInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      image: '',
      wishList: []
    }
    this.getProducts();
    //  this.addToShoppingCart = this.addToShoppingCart.bind(this)
  }

  getProducts() {
    let self = this;
    let api_key = "kblh8c5ktm9s8x1qv5o95yyz";
    const listing_id = this.props.params.listing_id;
    jsonp("https://openapi.etsy.com/v2/listings/" + listing_id + ".js?&api_key=" + api_key, null, function(err, data) {
      if (err) {
        console.error(err.message);
      } else {
        //console.log("info data is", data);
        self.setState({listing: data.results[0]});

      }
    });

    jsonp("https://openapi.etsy.com/v2/listings/" + listing_id + "/images.js?&api_key=" + api_key, null, function(err, data) {
      if (err) {
        console.error(err.message);
      } else {
        //console.log("info data is", data);
        self.setState({image: data.results[0].url_170x135});
      }
    });

  }

  addToList(){
     this.setState({wishList: this.state.wishList.concat(this.props.params.listing_id)});
     base.push(`${base.auth().currentUser.uid}/wishList`, {
       data: this.state.listing
     });
  }

  render() {
    return (
      <div>
      <Navbar/>
        <p><strong>{this.state.listing.title}</strong></p>
        <p><img src={this.state.image} alt="Etsy Pic" /></p>
        <p>{this.state.listing.description}</p>
        <p><strong>${this.state.listing.price}</strong></p>
        <p><button onClick={this.addToList.bind(this)}>Add to WishList</button></p>
      </div>
    );
  }
}



export default ItemInfo;
