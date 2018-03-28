import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";

class Home extends Component {
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
      <TextField
      hintText="The hint text can be as long as you want, it will wrap."
      />
    </div>
    )
  }
}

export default Home;