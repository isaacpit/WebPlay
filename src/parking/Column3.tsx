import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Column, Row } from "simple-flexbox";
import { Link }  from "react-router-dom";
// import styled, { css } from "styled-components";


type Column3Props = {
    title: string,
    paragraph?: string  // the paragraph is optional
  }
  

class Column3 extends React.Component<Column3Props> {
    constructor(props: Column3Props) {
        super(props);

        
    }


//     const Button = styled.button`

//     background: black;
//     border: none;
//     color: white;
//     outline: none;

//     ${props => props.add && css`
//         background: palevioletred;
//         color: white;
//     `};

//     ${props => props.delete && css`
//         background: palevioletred;
//         color: white;
//     `};

// `;

    render() {
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
                        <span>{this.props.title}</span>
                        
                        <span> test</span>
                    </Column>
                    <Column flexGrow={1} horizontal='center'>
                        <h3> Column 2 </h3>
                        <span> column 2 content </span>
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

  
}



export default Column3;
