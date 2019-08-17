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

  render() {
  return (

    <ul className="navigation">
    <li><a href="#Home">Home</a></li>
    <li><a href="#Service">Services</a></li>
    <li><a href="#Email">Email</a></li>
    {/* <li><a href="#">Contact</a></li> */}
    </ul>
  );
  }
}


export default NavBar;
