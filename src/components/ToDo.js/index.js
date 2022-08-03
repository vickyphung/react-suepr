import React from 'react';
import Navbar from './components/Navbar';
import Home from './Home';
function ToDo() {

  return (
    <div className="container">
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>

      <div className='content'>
        <Home />
      </div>
      
    </div>
  );
}

export default ToDo;