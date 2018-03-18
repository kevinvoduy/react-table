import React, { Component } from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2'
import './table.css'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <table>
          <tr>
            <th id='fixed'>id</th>
            {
              this.props.metrics.column_names.map(header => {
                return(
                  <th>{header}</th>
                )
              })
            }
          </tr>
          {
            this.props.object.map((id, i) => {
              return(
                <tr>
                  <th>{id.remote_id}</th>
                  {
                    this.props.metrics.column_names.map(header => {
                      return(
                        <th>{this.props.metrics.rows[i][header]}</th>
                      )
                    })
                  }
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}