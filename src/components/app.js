import React, { Component } from 'react';

import SheepList from '../containers/sheep-list';
import SheepDetail from '../containers/sheep-detail';

export default class App extends Component {
  render() {
    return (
    <div>
      <SheepList />
      <SheepDetail />
    </div>
    );
  }
}
