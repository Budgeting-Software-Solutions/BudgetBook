import React from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";
import ReactEcharts from 'echarts-for-react';
// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

// determines how many blue lines...
let department = [['tech'], ['sales']];
for (var i = 0; i < department.length; i++) {
    // var date = new Date(dottedBase += 3600 * 24 * 1000);
    category.push(
  department[i]);
    // var b = Math.random() * 200;
     var b = 10

    // var d = Math.random() * 200;
    var d = 15
    barData.push(b)
    // lineData.push(d + b);
    lineData.push(d);

}
var option = {
  backgroundColor: '#0f375f',
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['line', 'bar'],
      textStyle: {
          color: '#ccc'
      }
  },
  xAxis: {
      data: category,
      axisLine: {
          lineStyle: {
              color: '#ccc'
          }
      }
  },
  yAxis: {
      splitLine: {show: false},
      axisLine: {
          lineStyle: {
              color: '#ccc'
          }
      }
  },
  series: [{
      name: 'line',
      type: 'line',
      smooth: true,
      showAllSymbol: true,
      symbol: 'emptyCircle',
      symbolSize: 15,
      data: lineData
  }, {
      name: 'bar',
      type: 'bar',
      barWidth: 10,
      itemStyle: {
          normal: {
              barBorderRadius: 5,
              color: '#FFFF00'
          }
      },
      data: barData
  }, {
      name: 'line',
      type: 'bar',
      barGap: '-100%',
      barWidth: 10,
      itemStyle: {
          normal: {
              color: '#FFFF00'
          }
      },
      z: -12,
      data: lineData
  }, {
      name: 'dotted',
      type: 'pictorialBar',
      symbol: 'rect',
      itemStyle: {
          normal: {
              color: '#0f375f'
          }
      },
      symbolRepeat: true,
      symbolSize: [12, 4],
      symbolMargin: 1,
      z: -10,
      data: lineData
  }]
};
 
const Home = () => {
  return (
  <div>
    <AppBar
    iconElementLeft={
      <div>
        <Link to="/creation">    
          <FlatButton label="Create" />
        </Link>
        <Link to="/">
          <FlatButton label="Home" />
        </Link>
      </div>
    }
    />
    <ReactEcharts 
  option={option} 
  style={{height: '400px', width: '100%'}}  
  opts={{renderer: 'svg'}}  
  className='react_for_echarts' />
  </div>
  )
}

export default Home;