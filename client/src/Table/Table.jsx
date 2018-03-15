import React, { Component } from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Table>
          rowsCount={this.props.object.length}
          rowHeight={50}
          headerHeight={50}
          width={1000}
          maxHeight={500}
        >
          {
            this.props.metrics.rows.map(col => {
              return(
                <Column
                  header={<Cell>col</Cell>}
                  cell='{
                    hello
                  }'
                />
              )
            })
          }
        </Table>
      </div>
    )
  }
}