import React, { Component } from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2'
import './table2.css'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Poof', this.props.poof);
    return(
      <Table
        rowHeight={50}
        headerHeight={50}
        rowsCount={4}
        width={900}
        height={200}
        flexgrow={10}
        data={this.props}>
        <Column
          columnKey="remote_id"
          header={<Cell>id</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.object[rowIndex][columnKey]}
            </Cell>
          }
          fixed={true}
          width={100}
        />
        <Column
          columnKey="impressions"
          header={<Cell>impressions</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={100}
        />
        <Column
          columnKey="reach"
          header={<Cell>reach</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={75}
        />
        <Column
          columnKey="frequency"
          header={<Cell>frequency</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={150}
        />
        <Column
          columnKey="cpm"
          header={<Cell>cpm</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={150}
        />
        <Column
          columnKey="spend"
          header={<Cell>spend</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={80}
        />
        <Column
          columnKey="ctr"
          header={<Cell>ctr</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={130}
        />
        <Column
          columnKey="cost_per_inline_link_click"
          header={<Cell>cost_per_inline_link_click</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={210}
        />
        <Column
          columnKey="actions:goal"
          header={<Cell>actions:goal</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={100}
        />
        <Column
          columnKey="actions:link_click"
          header={<Cell>actions:link_click</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={140}
        />
        <Column
          columnKey="cost_per_action_type:cost_per_goal"
          header={<Cell>cost_per_action_type:cost_per_goal</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={220}
        />
        <Column
          columnKey="actions:offsite_conversion"
          header={<Cell>actions:offsite_conversion</Cell>}
          cell={({ rowIndex, columnKey }) =>
            <Cell>
              {this.props.metrics.rows[rowIndex][columnKey]}
            </Cell>
          }
          width={190}
        />
      </Table>
    )
  }
}