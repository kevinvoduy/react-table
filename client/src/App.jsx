import React, { Component } from 'react'
import Samples from './components/Samples/Samples'

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.fetchAdIds = this.fetchAdIds.bind(this);
    this.fetchMetrics = this.fetchMetrics.bind(this);
  }

  fetchAdIds() {
    console.log('hello');
  }

  fetchMetrics() {
    console.log('HELLO');
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
      </div>
    )
  }
}