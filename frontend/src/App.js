import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'  
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './common/header';
import Footer from './common/footer';

function App() {
  return (

<>

<Router>
  <div className='container' >
    <Header />
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/signup' element = {<Signup/>}/>
  </Routes>
  <Footer/>
  </div>
</Router>

</>
  );
}

export default App;
