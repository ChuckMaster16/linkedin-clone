import React, { Component, useEffect } from 'react';
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import { getUserAuth } from './actions'
import { connect } from 'react-redux';

function App({getUserAuth, }) {
  useEffect(()=>{
    getUserAuth();
  },[])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Login/>}/>
          <Route path='/home' element={[ <Header/>,<Home/>]}/>
          
          
        </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
