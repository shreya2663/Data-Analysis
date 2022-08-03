import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import burger from './assets/burger.jpg';
import Line from "./components/Line"
import PieChart from './components/PieChart';

function App() {
  return (
    <Router>
      <div className='App-main'>
        <div className='heading'>
        <h1>Analysis of Hungry Panda</h1>
        </div>
        <div className='main'>
        <div className='left'>
          <div>
            <h3 style={{margin: 3}}>BEST-SELLER</h3>
            <img src={burger} width={230} height={240} style={{margin:2}}/>
          </div>
        </div>
        <div>
          {/* <h3>Items</h3> */}
          <PieChart/>
        </div>
        <div className='left'>
          {/* <h3>Profit</h3> */}
          <div>
            <h3 style={{margin: 3}}>Profit</h3>
            <table>
            <tr>
              <th>Daily</th>
              <th>Weekly</th>
              <th>Monthly</th>
            </tr>
            <tr>
              <td>12K</td>
              <td>180K</td>
              <td>750K</td>
            </tr>
          </table>
          </div>
        </div>
        <div>
          {/* <h3>Graphs</h3> */}
          <Line/>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
