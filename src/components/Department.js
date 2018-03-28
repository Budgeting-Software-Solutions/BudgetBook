import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Department extends Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}

export default Department;