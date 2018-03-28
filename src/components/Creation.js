import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Link } from "react-router-dom";
import Department from "./Department";

class Creation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberofDept: 0  
    }
    this.addNewDepartment = this.addNewDepartment.bind(this);
  }
  addNewDepartment() {
    this.set
  }
    render() {
      for (let i = 0; i < )
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
              hintText="Apple"
              floatingLabelText="Company Name"
              floatingLabelFixed={true}
              />
              <TextField
              hintText="$5,000,000,000"
              floatingLabelText="Company Budget"
              floatingLabelFixed={true}
              />
              <FlatButton label="Add Company" />
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
export default Creation;