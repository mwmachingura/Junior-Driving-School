import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Booking from './components/pages/Booking';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/bookings' component={Booking}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/services' component={Services}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
