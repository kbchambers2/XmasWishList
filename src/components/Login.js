import React, {Component} from 'react';
import base from '../config/Rebase';

class Login extends Component {
constructor(props) {
     super(props);
     this.state = {
       user: '',
     }
     this.handleClick = this.handleClick.bind(this);
     this.authHandler = this.authHandler.bind(this);
   }
  handleClick(event) {
    event.preventDefault();
     base.authWithOAuthPopup('github', this.authHandler)
  }
  authHandler(error, user) {

   if (!error) {
     this.setState({
       user: user.user
     })
  	console.log(user);
    base.update(`${base.auth().currentUser.uid}`, {
      data: {personInfo: {name: user.user.displayName, avatar: user.user.photoURL}}
    });
    this.context.router.push('/search');
   } else {
     console.log(error);
   }
 }
  render() {
    return (
     <li onClick={this.handleClick}><a href="#">Sign In</a></li>
    );
  }

}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Login;
