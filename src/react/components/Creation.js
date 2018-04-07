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
  department: store.category
})

const mapDispatchToProps = (dispatch) => ({
    addDepartment: (deptName, spendingLimit) => {
      dispatch(actionCreator.addDepartment(deptName, spendingLimit));
    } 
})

class Creation extends Component {
    constructor(){
        super();
        this.onClickAddDepartment = this.onClickAddDepartment.bind(this); 
    }
    onClickAddDepartment(){
      let departmentName = document.getElementById("departmentName").value;
      let spendingLimit = document.getElementById("spendingLimit").value;
      console.log("SPENDING LIMIT INSIDE onClickAddDepartment", spendingLimit); 
      this.props.addDepartment(departmentName, parseInt(spendingLimit));
      document.getElementById("departmentName").value = "";
      document.getElementById("spendingLimit").value = "";
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
            id = "spendingLimit"
            hintText="$800"
            floatingLabelText="Spending Limit"
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
