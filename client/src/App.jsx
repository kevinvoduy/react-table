import React, { Component } from 'react'
import axios from 'axios'
import Table from './Table/Table'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      object: {},
      metrics: {},
    };
    this.fetchData = this.fetchAdIds.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchAdIds() {
    const object = await axios.get('/api/data/ads');
    const metrics = await axios.get('/api/data/ads_metrics');
    this.setState({
      object,
      metrics,
    });
  }

  render() {
    if (this.state.metrics.data && this.state.object.data) {
      return (
        <div>
          <Table
            object={this.state.object.data.ads}
            metrics={this.state.metrics.data}
          />
        </div>
      )
    } else {
      return (
        <div>
          <h3>Loading. Please Wait...</h3>
        </div>
      )
    }
  }
}