import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'dogs', 'cats','rats'],
  [0, 0, 0 , 0],
  [1, 10, 5 , 2],
  [2, 23, 15 , 4],
  [3, 17, 9 , 6],
  [4, 18, 10 , 8],
  [5, 9, 5 , 12],
  [6, 11, 3 , 14],
  [7, 27, 19 , 16],
]
const LineChartOptions = {
  hAxis: {
    title: 'Time',
  },
  vAxis: {
    title: 'Popularity',
  },
  series: {
    1: { curveType: 'function' },
  },
}
class Line extends Component {
  render() {
    return (
      <div className="container mt-5">
        {/* <h5>React Line Chart</h5> */}
        <Chart
          width={'480px'}
          height={'280px'}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default Line