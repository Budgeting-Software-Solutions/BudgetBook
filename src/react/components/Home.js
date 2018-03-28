import React from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";

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
    <TextField
    hintText="HELLOOLLLLLLLLO."
    />
  </div>
  )
}

export default Home;