import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Column2 from './parking/Column2';
import Column3 from './parking/Column3';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './parking/Home';
import App from './parking/App';
import NavBar from "./parking/NavBar";
import ParkingHome from './parking/ParkingHome';
import ErrorPage from './parking/ErrorPage';
import Portfolio from './portfolio/Porfolio';
import Bio from './portfolio/Bio';

const items = 
[
<h2>item0</h2>, 
<h2>item1</h2>,
<h2>item2</h2>,
]

const txt = {
  data: [
    {
      name: "Music App",
      description: "Playground made for playing with React Native.",
      images: [
        "Game of Thrones2017_1.jpg",
      ]
    },
    {
      name: "Web Scrape",
      description: "Playground for scraping web data using python and javascript.",
      images: [
        "Interstellar2014_1.jpg",
        "Interstellar2014_2.jpg",
        "Interstellar2014_3.jpg",
      ]
    },
    {
      name: "Skinning with OpenGL",
      description: "Implemented skeletal animation using a given weights and positions from structured files.",
      images: [
        "Blade Runner 20492017_1.jpg",
        "Blade Runner 20492017_2.jpg",
        "Blade Runner 20492017_3.jpg",
      ]
    }
  ]

}

const AppContainer = () => (
  <BrowserRouter>
    <div className="sans-serif">
    <Switch>
      <Route path="/index.html" component={Home} />
      <Route exact path="/" render={(props) => <Portfolio {...props} children={items} />} />
      <Route exact path="/parking/App" component={App} />
      <Route exact path="/parking" component={Home} />
      <Route path="/parking/Column2" component={Column2} />
      <Route path="/parking/Column3" render={(props) => <Column3 {...props} title={"some title"} />}/> 
      <Route path="/parking/navbar" render={(props) => <NavBar {...props} />}/>
      <Route path="/parking/home" render={(props) => <ParkingHome {...props} children={items} />}/>
<Route path="/portfolio/bio" render={(props) => <Bio {...props}/> }/>
      <Route component={ErrorPage}/>
    </Switch>
    </div>
  </BrowserRouter>
);


ReactDOM.render(<AppContainer/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
