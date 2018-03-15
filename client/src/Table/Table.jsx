import React, { Component } from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2'
import './table.css'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.metrics)
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
            this.props.object.map(item => {
              return(
                <tr>
                  <th id='fixed'>
                   {item.name}
                  </th>
                  {
                    this.props.metrics.column_names.map(header => {
                      return(
                        <th>{this.props.metrics.rows[0][header]}</th>
                      )
                    })
                  }
                </tr>
              )
            })
          }
          {
            this.props.object.map(item => {
              return(
                <tr>
                  <th id='fixed'>
                   {item.name}
                  </th>
                  {
                    this.props.metrics.column_names.map(header => {
                      return(
                        <th>{this.props.metrics.rows[0][header]}</th>
                      )
                    })
                  }
                </tr>
              )
            })
          }
          {
            this.props.object.map(item => {
              return(
                <tr>
                  <th id='fixed'>
                   {item.name}
                  </th>
                  {
                    this.props.metrics.column_names.map(header => {
                      return(
                        <th>{this.props.metrics.rows[0][header]}</th>
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