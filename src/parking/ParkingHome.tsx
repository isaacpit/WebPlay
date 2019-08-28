import React, { ReactPropTypes } from 'react';
// import logo from './logo.svg';
import './App.css';
import  NavBar from './NavBar';

import { CarouselContainer, CarouselSlot } from "./Carousel";
// import { Column, Row } from "simple-flexbox";
// import { Link }  from "react-router-dom";
// import styled, { css } from "styled-components";

const data = [
  {
    name: "apple"
  },
  {
    name: "banana"
  },
  {
    name: "cherry"
  }
]

type ParkingHomeProps = {
  // title: string,
  // paragraph?: string  // the paragraph is optional
  children: React.ReactNodeArray;

}

type ParkingHomeState = {
  sliding: boolean;
  position: number;
}
  

export default class ParkingHome extends React.Component<ParkingHomeProps, ParkingHomeState> {
  constructor(props: ParkingHomeProps) {
  super(props);

  this.state = {
    position: 0,
    sliding: false,
  }
  }

  getOrder(itemIndex : number) {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position)
    }
    return itemIndex - position
  }

  doSliding = (position : number) => {
    this.setState({
      sliding: true,
    })
    setTimeout(() => {
     this.setState({
        sliding: false
      })
    }, 50)
  }

  nextSlide = () => {
    const { position } = this.state
    const { children } = this.props
    const numItems = children.length || 1
    this.setState({
      position: position === numItems - 1 ? 0 : position + 1
    });
    this.doSliding(this.state.position);
  }

  render() {
  return (
    <div style={{overflow: "hidden"}}>
        <NavBar />
        
        <div>
          "position: " {this.state.position} <br/>
          "sliding: " {this.state.sliding === true ? "true" : "false"}
        </div>
        <CarouselContainer sliding={this.state.sliding}>
          
          {this.props.children.map((elem, idx) => (
            <CarouselSlot 
              key={idx}
              order={this.getOrder(idx)}
            >

              <img height={200} style={styles.imgStyle} src={"https://dummyimage.com/640x4:3"} />
              {elem}
            </CarouselSlot> 
          ))}

          
        </CarouselContainer>
        <button onClick={ () => this.nextSlide() }>Next</button>

    </div>
  
  );
  }
}

const styles = {
  all: {
    padding: "20px"
  },
  imgStyle: {
    padding: "20px",
  }
  
}



