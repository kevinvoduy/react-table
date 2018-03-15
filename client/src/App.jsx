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
    this.fetchAdIds = this.fetchAdIds.bind(this);
    this.fetchMetrics = this.fetchMetrics.bind(this);
  }

  componentDidMount() {
    this.fetchAdIds();
    this.fetchMetrics();
  }

  async fetchAdIds() {
    const data = await axios.get('/api/data/objects');
    this.setState({
      object: data,
    });
  }

  async fetchMetrics() {
    const data = await axios.get('/api/data/metrics');
    this.setState({
      metrics: data,
    });
  }

  render() {
    if (this.state.metrics && this.state.object) {
      return (
        <div>
          <h2>Loaded</h2>
          <Table
            object={this.state.object.data}
            metrics={this.state.metrics.data}
          />
        </div>
      )
    } else {
      return (
        <div>
          <h3>Please Wait...</h3>
        </div>
      )
    }
  }
}