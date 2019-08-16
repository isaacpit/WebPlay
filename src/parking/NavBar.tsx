import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Column, Row } from "simple-flexbox";
import { Link }  from "react-router-dom";
// import styled, { css } from "styled-components";


type NavBarProps = {
    // title: string,
    // paragraph?: string  // the paragraph is optional
  }
  

class NavBar extends React.Component<NavBarProps> {
    constructor(props: NavBarProps) {
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

        <ul className="navigation">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        );
    }
}


export default NavBar;
