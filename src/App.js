import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Contact from './contact/contact';

import Main from './main/main';
import {BrowserRouter as Router , Link,} from "react-router-dom";



function App() {
  return (
    
    <div className="App">
      <Router>
      <Header></Header>
      <Main></Main>
      <Footer> </Footer>
      </Router>
    </div>
  );
}

export default App;
