import styled from 'styled-components';

interface CarouselSlotProps {
  order: number,
}

interface CarouselContainerProps {
  sliding: boolean,
}

const CarouselSlot = styled.div<CarouselSlotProps>`
  display: flex;
  flex: 1 0 100%;
  flex-direction: column
  flex-basis: 80%;
  margin-right: 20px;
  order: ${(props) => props.order};
  background-color: #dd3388
  height: 300px
  justify-content: center
  align-items: center
`

const CarouselContainer = styled.div<CarouselContainerProps>`
  display: flex;
  margin: 0 0 20px 20px;
  // overflow: hidden;

  transition: ${(props) => props.sliding ? 'none' : 'transform 1s ease'};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(calc(-80% - 20px))'
    return 'translateX(0%)'
  }};
`

// class CarouselSlot extends Component {

// }

export  {
  CarouselSlot,
  CarouselContainer
}


