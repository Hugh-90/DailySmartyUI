import React, { Component } from 'react';

import Logo from './logo';
import Searchbar from './searchBar';
import RecentPosts from './recentPosts';


export default class Home extends Component {

  handleSearchbarSubmit(query) {
    console.log('trying to handle submit for query', query);
    this.props.history.push('/results');
 }

  render () {
    return (
      <div>
        <div>
          <Logo/>
          <Searchbar onSubmit={(query) => this.handleSearchbarSubmit(query)} />
          <RecentPosts/>
        </div>
      </div>
    );
  }
}