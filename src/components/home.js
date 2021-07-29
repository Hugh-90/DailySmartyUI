import React, { Component } from 'react';

import Logo from './logo';
import Searchbar from './searchBar';
import RecentPosts from './recentPosts';

import {connect } from "react-redux";
import * as actions from "../actions"


export default class Home extends Component {

  handleSearchbarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
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

export default connect(null, actions)(Home);