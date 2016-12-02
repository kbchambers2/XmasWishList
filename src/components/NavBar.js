import React, {Component} from 'react';
import { Link } from 'react-router';
import Login from './Login';
import Signout from './Signout';
import Names from './Names';


class Navbar extends Component {
  render() {
    return (
    <nav className="navbar navbar-default">
	  <div className="container-fluid">
	    <div className="navbar-header">
	    <Link className="navbar-brand" to="/search">WishList+</Link>
	    </div>
	    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul className="nav navbar-nav navbar-right">
	        <Login/>
          <li><Link to="/">Friends List</Link></li>
	        <li><Link to="/my-wishes">My Wishes</Link></li>
          <Signout/>

	      </ul>
	    </div>
	  </div>
	</nav>
    );
  }

}


export default Navbar;
