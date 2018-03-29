import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import { Link } from "react-router-dom";
import Department from "./Department";
import actionCreator from "../../redux/actionCreators.js";
import {connect} from "react-redux"; 

const mapStateToProps = (store) => ({   
  // companyName: state.companyName,
  // companyBudget: state.companyBudget,
  department: store.category
})

const mapDispatchToProps = (dispatch) => ({
    // createCompany: (compName, compBudget) => {
    //     // console.log("creation.js/mapDispatchToProps/createCompany");
    //     dispatch(actionCreator.addCompany(compName, compBudget));
    // },
    addDepartment: (deptName) => {
      // console.log("!!!!!!!!deptBudget", deptBudget);
      dispatch(actionCreator.addDepartment(deptName));
    } 
    // addTransaction: (deptName, transaction) => {
    //   dispatch(actionCreator.addTransaction, transaction);
    // }
})

class Creation extends Component {
    constructor(){
        super();
        this.onClickAddDepartment = this.onClickAddDepartment.bind(this); 
    }
    onClickAddDepartment(){
      // console.log("onClickAddDept");
      let departmentName = document.getElementById("departmentName").value;
      //let departmentBudget = document.getElementById("departmentBudget").value;
      // console.log("-----department name:", departmentName);
      // console.log("-----department budget:", departmentBudget);
      this.props.addDepartment(departmentName);
  }
    render() {
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
        title="Budget Book"
        />
        <Card> 
          <CardTitle title="Add Category"/>
          <CardActions>
            <TextField
            id = "departmentName"
            hintText="Gas Bill"
            floatingLabelText="Category Name"
            floatingLabelFixed={true}
            />
            <TextField
            id = "departmentBudget"
            hintText="$800"
            floatingLabelText="Total Budget"
            floatingLabelFixed={true}
            />
            <RaisedButton 
            label="Add Category" 
            primary={true} 
            style={{margin: 12}}  
            onClick = {this.onClickAddDepartment}/>
          </CardActions>
        </Card>
      </div>
      )
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Creation);