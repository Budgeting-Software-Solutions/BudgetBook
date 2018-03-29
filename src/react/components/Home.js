import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import ReactEcharts from 'echarts-for-react';

const mapStateToProps = (state) => ({   
    companyName: state.companyName,
    companyBudget: state.companyBudget,
    department: state.department
})
 
class Home extends Component {
  constructor(props) {
      super(props);
      this.state= {
        value: 1
      }
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {this.setState({value})};

  render() {
    // Generate data
    let category = [[this.props.companyName]];
    let dottedBase = +new Date();
    let lineData = [parseInt(this.props.companyBudget)];
    let barData = [];
    let departmentListName = this.props.department.map(ele => {
      return [ele.departmentName];
    })
    let departmentListBudget = this.props.department.map(ele => {
      return ele.departmentBudget;
    })
    let departmentDropDownList = [<MenuItem value={0} primaryText={this.props.companyName}/>]
    console.log('NOOOOO', departmentListName);
    console.log('WHYYYYYYY', departmentListBudget);
    // determines how many blue lines...
    for (let i = 0; i < departmentListName.length; i++) {
      lineData.push(parseInt(departmentListBudget[i]));
      // barData.push(parseInt(departmentListBudget[i]) - 500)
      category.push(departmentListName[i]);
      departmentDropDownList.push(<MenuItem value={i} primaryText={departmentListName[i]}/>)
    }
    let option = {
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
                  color: '#00FF00'
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
      return (
        <div>
          <AppBar
          iconElementLeft={
          <div>
            <Link to="/creation">    
              <RaisedButton label="Create" primary={true} />
            </Link>
            <Link to="/">
              <RaisedButton label="Home" primary={true} />
            </Link>
          </div>
          }
          />
        <ReactEcharts 
        option={option} 
        style={{height: '400px', width: '100%'}}  
        opts={{renderer: 'svg'}}  
        className='react_for_echarts' />
        <Card> 
          <CardTitle title="Add/Subtract Transaction"/>
            <Card>
              <CardActions>
                <DropDownMenu 
                  style={{width: 200}}
                  autoWidth={false}
                  value={this.state.value} 
                  onChange={this.handleChange}>
                {departmentDropDownList}
                </DropDownMenu>
              </CardActions>
            </Card>
            <CardActions>
              <TextField
              id = "addTransaction"
              hintText="$100,000,000 or -$100,000,000"
              floatingLabelText="Transaction"
              floatingLabelFixed={true}
              />
              <RaisedButton 
              label="Add/Subtract Transaction" 
              primary={true} 
              style={{margin: 12}}/>
            </CardActions>
        </Card>
      </div>
    )
  }
}



export default connect(
    mapStateToProps,
  )(Home)