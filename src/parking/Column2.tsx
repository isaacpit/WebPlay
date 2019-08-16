import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Column, Row } from "simple-flexbox";
import { Link }  from "react-router-dom";

function Column2() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Column flexGrow={1}>
        <Row horizontal='center'>
            <h1>HEADER</h1>
        </Row>
        <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
                <h3> Column 1 </h3>
                <span> column 1 content </span>
            </Column>
            <Column flexGrow={1} horizontal='center'>
                <h3> Column 2 </h3>
                <span> column 2 content </span>
                <li>
                    <Link to={"/parking"}>Home
                    </Link>
                </li>   
            </Column>
           
        </Row>
    </Column>
  );
}



export default Column2;
