import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Search from '../components/Search';
import Landing from '../containers/Landing';
import MyWishesContainer from '../containers/MyWishesContainer';
import FriendWishes from '../components/FriendWishes';
import App from '../App';
import ItemInfo from '../components/ItemInfo';
import Names from '../components/Names'


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Names}/>
      <Route path="/login" component={Landing}/>
      <Route path="/my-wishes" component={MyWishesContainer}/>
      <Route path="/wish-list/:uid" component={FriendWishes}/>
      <Route path="/search" component={Search}/>
      <Route path="/info/:listing_id" component={ItemInfo}/>
    </Route>
  </Router>
)

export default routes;
