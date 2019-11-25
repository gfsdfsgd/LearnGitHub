import React, { Component } from "react";
import "../index.css";
import SlideShow from "./SlideShow/SlideShow";
import {createStore} from 'redux';
import  { Provider } from 'react-redux';
import * as actions from "./Actions/actions";
import { bindActionCreators } from 'redux'
const initialState = {
    isSignUp: false,
    isSignIn: false,
    isMainPage: true
},
reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "SignIn":
            return {...state, isSignIn: true, isSignUp: false, isMainPage: false};
        case "SignUp":
            return {...state, isSignUp: true, isSignIn: false, isMainPage: false};
        case "mainPage":
            return {...state, isMainPage: true, isSignIn: false, isSignUp: false}
    }
},
store = createStore ( reducer ),
{ dispatch } = store,
    { log, reg, main } = bindActionCreators ( actions, dispatch );
class App extends Component {
  render() {
      console.log (store);
    return (
        <Provider store = {store}>
        <div className="container">
            <SlideShow />
        </div>
        </Provider>
    );
  }
}

export default App;
