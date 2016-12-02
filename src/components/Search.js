import React, {Component} from 'react';
import jsonp from 'jsonp';
import WishCards from './WishCards';
import Navbar from '../components/NavBar';

class Search extends Component {
  constructor(props) {
     super(props);
     this.state = {
       listings: []
     }
     this.returnListings = this.returnListings.bind(this)
   }

   componentDidMount() {
    let api_key = "kblh8c5ktm9s8x1qv5o95yyz";
    let self = this
    jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=christmas&limit=12&includes=Images:1&api_key=' + api_key, null, function(err, data) {
       if (err) {
         console.error(err.message);
       } else {
         //console.log("data is", data);
         self.setState({listings: data.results})
       }
     });
   }

   returnListings(e) {
     e.preventDefault();
     let self = this;
     let terms = this.refs.search.value;
     let api_key = "kblh8c5ktm9s8x1qv5o95yyz";
     jsonp('https://openapi.etsy.com/v2/listings/active.js?keywords=' + terms + '&limit=12&includes=Images:1&api_key=' + api_key, null, function(err, data) {
       if (err) {
         console.error(err.message);
       } else {
         console.log("data is", data);
         self.setState({listings: data.results})
       }
     });
   }

   render() {

     return (
       <div>
         <Navbar/>
         <h2>Search Page</h2>
         <form onSubmit={this.returnListings}>
           <input placeholder="search here" ref="search"/>
           <button>Search</button>
         </form>
         <WishCards products={this.state.listings}/>
       </div>
     );
   }
}

export default Search;
