import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>
      <Link to="/parking/App">Redux example</Link>
      
    </h1>
    <h1>
      <Link to="/parking">Parking Home</Link>      
    </h1>
    <h1>
      <Link to="/parking/Column2">Column2</Link>
    </h1>
    <h1>
      <Link to="/parking/Column3">Column3</Link>
    </h1>
    <h1>
      <Link to="/parking/navbar">NavBar</Link>
    </h1>
  </div>
)