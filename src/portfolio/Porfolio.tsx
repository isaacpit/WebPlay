import React, { ReactPropTypes } from 'react';
// import logo from './logo.svg';
import '../parking/App.css';
import  NavBar from '../parking/NavBar';
import Column3 from '../parking/Column3';

import { CarouselContainer, CarouselSlot } from "../parking/Carousel";
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

type PortfolioProps = {
  // title: string,
  // paragraph?: string  // the paragraph is optional
  children: React.ReactNodeArray;

}

type PortfolioState = {
  sliding1: boolean;
  sliding2: boolean;
  position1: number;
  position2: number;
  
}

type StateKeys = keyof PortfolioState;
  

export default class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
  constructor(props: PortfolioProps) {
    super(props);

    this.state = {
      position1: 0,
      position2: 0,
      sliding1: false,
      sliding2: false,
    }
  }

  getOrder(itemIndex : number, keyPos : string) {
    // const { position1 } = this.state
    const pos = this.state[keyPos as keyof PortfolioState] as number 
    const { children } = this.props
    const numItems = children.length || 1
    if (itemIndex - pos < 0) {
      return numItems - Math.abs(itemIndex - pos)
    }
    return itemIndex - pos
  }

  doSlidingGeneral = (position : number, key : string) => {
    this.setState(prevState => ({
      ...prevState,
      [key]: true 
    }));
    // this.setState({
    //   [key]: value
    // } as Pick<PortfolioState, keyof PortfolioState>)
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        [key]: false 
      }));
    //  this.setState({
    //     sliding1: false
    //   })
    }, 50)
  }

  // doSliding1 = (position : number) => {
  //   this.setState({
  //     sliding1: true,
  //   })
  //   setTimeout(() => {
  //    this.setState({
  //       sliding1: false
  //     })
  //   }, 50)
  // }

  // doSliding2 = (position : number) => {
  //   this.setState({
  //     sliding2: true,
  //   })
  //   setTimeout(() => {
  //    this.setState({
  //       sliding2: false
  //     })
  //   }, 50)
  // }

  // nextSlide = (keyPos : string, keySliding : string) => {
  //   const { position1 } = this.state
  //   const { children } = this.props
  //   const numItems = children.length || 1
  //   this.setState({
  //     position1: position1 === numItems - 1 ? 0 : position1 + 1
  //   });
  //   this.doSlidingGeneral(this.state.position1, keySliding);
  // }
  nextSlide = (keyPos : string, keySliding : string) => {
    // const { position1 } = this.state
    // const pos = this.state[keyPos];
    const { children } = this.props
    const numItems = children.length || 1
    // this.setState({
    //   position1: position1 === numItems - 1 ? 0 : position1 + 1
    // });

    this.setState(prevState => ({
      ...prevState,
      [keyPos]: (this.state[keyPos as keyof PortfolioState] as number) === numItems - 1 ? 0 : (this.state[keyPos as keyof PortfolioState] as number) + 1
    }));
    this.doSlidingGeneral(this.state.position1, keySliding);
  }

  render() {
  return (
    <div style={{overflow: "hidden", backgroundColor: "#C09F80"}}>
        <NavBar />
        
        <Column3 title={"test"}/>
        

        <div>
          "position1: " {this.state.position1} <br/>
          "position2: " {this.state.position2} <br/>
          "sliding1: " {this.state.sliding1 === true ? "true" : "false"} <br/>
          "sliding2: " {this.state.sliding2 === true ? "true" : "false"} <br/>
        </div>
        <CarouselContainer style={{}} sliding={this.state.sliding1}>
          
          {this.props.children.map((elem, idx) => (
            <CarouselSlot 
              key={idx}
              order={this.getOrder(idx + this.state.position1, "position1")}
            >

              <img height={200} style={styles.imgStyle} src={"https://dummyimage.com/640x4:3"}/>
              {elem}
            </CarouselSlot> 
          ))}

          
        </CarouselContainer>
        <button onClick={ () => this.nextSlide("position1", "sliding1") }>Next</button>

        <CarouselContainer sliding={this.state.sliding2}>
          
          {this.props.children.map((elem, idx) => (
            <CarouselSlot 
              key={idx}
              order={this.getOrder(idx + this.state.position2, "position2")}
            >

              <img height={200} style={styles.imgStyle} src={"https://dummyimage.com/640x4:3"}/>
              {elem}
            </CarouselSlot> 
          ))}

          
        </CarouselContainer>
        <button onClick={ () => this.nextSlide("position2", "sliding2") }>Next</button>

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



