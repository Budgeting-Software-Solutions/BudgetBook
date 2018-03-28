import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from "react-router-dom";
import Department from "./Department";
import actionCreator from "../../redux/actionCreators.js";
import {connect} from "react-redux"; 

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    createCompany: (compName, compBudget) => {
        console.log("creation.js/mapDispatchToProps/createCompany");
        dispatch(actionCreator.addCompany(compName, compBudget));
    }
})

class Creation extends Component {
    constructor(){
        super();
        this.onClickAddCompany = this.onClickAddCompany.bind(this); 
    }

    onClickAddCompany(){
        console.log("onClickAddCompany");
        let companyName = document.getElementById("companyName").value;
        let companyBudget = document.getElementById("companyBudget").value;
        this.props.createCompany(companyName, companyBudget);
    }

    render() {
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
              <FlatButton onClick = {this.onClickAddCompany} label="Add Company" />
            </CardActions>
        </Card>
        <Card>
          <CardTitle title="Add Additonal Departments"/>
          <FlatButton label="Department +1" onClick={this.addNewDepartment} />
        </Card>
        <Card> 
          <CardTitle title="Add Department"/>
          <CardActions>
            <TextField
            hintText="iPhone"
            floatingLabelText="Company Name"
            floatingLabelFixed={true}
            />
            <TextField
            hintText="$2,000,000,000"
            floatingLabelText="Company Budget"
            floatingLabelFixed={true}
            />
            <FlatButton label="Add Department" />
          </CardActions>
        </Card>
        {/* <div>
          {DepartmentList}
        </div>   */}
      </div>
      )
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Creation);