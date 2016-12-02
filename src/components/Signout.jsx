import React, {Component} from 'react';
import base from '../config/Rebase';

class Signout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.handleClick = this.handleClick.bind(this);
    // this.authHandler = this.authHandler.bind(this);

  }

    handleClick(event) {
      console.log('Are You Working');
      event.preventDefault();
       base.unauth()
        // Sign-out successful.

      console.log('This user is logged out');
    }


    render() {
      return (
        <li onClick={this.handleClick}>
          
          <a href="#">Sign Out</a>

        </li>
      );
    }
  }

  export default Signout;
