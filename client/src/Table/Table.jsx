import React, { Component } from 'react'
import {Table, Column, Cell} from 'fixed-data-table-2';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ads } = this.props.object;
    const { colunm_names, rows } = this.props.metrics
    return(
      <div>
        <Table
          rowsCount={ads.length}
          rowHeight={50}
          headerHeight={50}
          width={1000}
          height={500}>
          <Column
            header={<Cell>{...colunm_names}</Cell>}
            cell={props => (
              <Cell {...props}>
                ass
              </Cell>
            )}
            width={200}
          />
        </Table>
      </div>
    )
  }
}