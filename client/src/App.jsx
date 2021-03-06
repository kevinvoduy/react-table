import React, { Component } from 'react'
import axios from 'axios'
import Table from './components/Table/Table'
import Table2 from './components/Table2/Table2'
import './app.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      object: {},
      metrics: {},
      sortedMetrics: {
        data: {
          column_names: [],
          rows: [],
        }
      },
    };
    this.fetchData = this.fetchAdIds.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  // gets data from external API
  async fetchAdIds() {
    const object = await axios.get('/api/data/ads');
    const metrics = await axios.get('/api/data/ads_metrics');
    this.setState({
      object,
      metrics,
    });

    const { ads } = this.state.object.data;
    const { column_names, rows } = this.state.metrics.data;

    // sorts incoming data
    for (let i = 0; i < ads.length; i++) {
      this.state.sortedMetrics.data.column_names = column_names;
      for (let j = 0; j < rows.length; j++) {
        if (rows[j].remote_id === ads[i].remote_id) {
          this.state.sortedMetrics.data.rows.push(rows[j]);
        }
      }
    }
  }

  render() {
    if (this.state.sortedMetrics.data.rows && this.state.object.data) {
      return (
        <div className='container'>
          <h2>Css table without veritcal scroll</h2>
          <Table
            object={this.state.object.data.ads}
            metrics={this.state.metrics.data}
            poof={this.state.sortedMetrics.data}
          />

          <h2>React table with x/y scroll</h2>
          <Table2
            object={this.state.object.data.ads}
            metrics={this.state.metrics.data}
            poof={this.state.sortedMetrics.data}
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