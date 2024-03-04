import React from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'  
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './common/header';
import Footer from './common/footer';
import Test from './pages/test';

function App() {
  return (

<>

<Router>
  <div className='containe' >
    {/* <Header /> */}
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/signup' element = {<Signup/>}/>
    <Route path = '/test' element={<Test/>} />
  </Routes>
  {/* <Footer/> */}
  </div>
</Router>

</>
  );
}

export default App;
