import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Column2 from './parking/Column2';
import Column3 from './parking/Column3';

import { BrowserRouter, Route } from "react-router-dom";
import Home from './parking/Home';
import App from './parking/App';
import NavBar from "./parking/NavBar";
import ParkingHome from './parking/ParkingHome';

const items = 
[
<h2>item0</h2>, 
<h2>item1</h2>,
<h2>item2</h2>,

]

const AppContainer = () => (
  <BrowserRouter>
    <div className="sans-serif">
      <Route exact path="/parking/App" component={App} />
      <Route exact path="/parking" component={Home} />
      <Route path="/parking/Column2" component={Column2} />
      <Route path="/parking/Column3" render={(props) => <Column3 {...props} title={"some title"} />}/> 
      <Route path="/parking/navbar" render={(props) => <NavBar {...props} />}/>
      <Route path="/parking/home" render={(props) => <ParkingHome {...props} children={items} />}/>
    </div>
  </BrowserRouter>
);


ReactDOM.render(<AppContainer/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
