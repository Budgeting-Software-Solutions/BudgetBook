import React from "react"; 
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from "./react/components/App";
import {createStore} from "redux";
import {Provider} from "react-redux";
import Reducers from "./redux/reducers.js"; 
import { composeWithDevTools } from 'redux-devtools-extension';
console.log("Inside main.js, line 9");
let store = createStore(Reducers, composeWithDevTools()); 

ReactDOM.render( 
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>, 
  document.getElementById('app'));
