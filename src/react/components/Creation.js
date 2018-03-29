import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardTitle} from 'material-ui/Card';
import { Link } from "react-router-dom";
import Department from "./Department";
import actionCreator from "../../redux/actionCreators.js";
import {connect} from "react-redux"; 

const mapStateToProps = (state) => ({   
  companyName: state.companyName,
  companyBudget: state.companyBudget,
  department: state.department
})

const mapDispatchToProps = (dispatch) => ({
    createCompany: (compName, compBudget) => {
        // console.log("creation.js/mapDispatchToProps/createCompany");
        dispatch(actionCreator.addCompany(compName, compBudget));
    },
    createDepartment: (deptName, deptBudget) => {
      // console.log("!!!!!!!!deptBudget", deptBudget);
      dispatch(actionCreator.addDepartment(deptName, deptBudget));
  }
})

class Creation extends Component {
    constructor(){
        super();
        this.onClickAddCompany = this.onClickAddCompany.bind(this); 
        this.onClickAddDepartment = this.onClickAddDepartment.bind(this); 

    }

    onClickAddCompany(){
        // console.log("onClickAddCompany");
        let companyName = document.getElementById("companyName").value;
        let companyBudget = document.getElementById("companyBudget").value;
        this.props.createCompany(companyName, companyBudget);
    }

    onClickAddDepartment(){
      // console.log("onClickAddDept");
      let departmentName = document.getElementById("departmentName").value;
      let departmentBudget = document.getElementById("departmentBudget").value;
      // console.log("-----department name:", departmentName);
      // console.log("-----department budget:", departmentBudget);
      this.props.createDepartment(departmentName, departmentBudget);
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
        />
        <Card> 
            <CardTitle title="Add Company"/>
            <CardActions>
              <TextField
              id = "companyName"
              hintText="Apple"
              floatingLabelText="Company Name"
              floatingLabelFixed={true}
              />
              <TextField
              id = "companyBudget"
              hintText="$5,000,000,000"
              floatingLabelText="Company Budget"
              floatingLabelFixed={true}
              />
              <RaisedButton 
              label="Add Company" 
              primary={true} 
              style={{margin: 12}} 
              onClick = {this.onClickAddCompany}/>
            </CardActions>
        </Card>
      
        <Card> 
          <CardTitle title="Add Department"/>
          <CardActions>
            <TextField
            id = "departmentName"
            hintText="iPhone"
            floatingLabelText="Company Name"
            floatingLabelFixed={true}
            />
            <TextField
            id = "departmentBudget"
            hintText="$2,000,000,000"
            floatingLabelText="Company Budget"
            floatingLabelFixed={true}
            />
            <RaisedButton 
            label="Add Department" 
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