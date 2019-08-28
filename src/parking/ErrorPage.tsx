import React from 'react';
import { Link } from 'react-router-dom';

// export default () => (
  // <div>

  //   <h1>Error: could not find page. Allow me to redirect you</h1>
  //   <h1>
  //     <Link to="/parking/App">Redux example</Link>
      
  //   </h1>
  //   <h1>
  //     <Link to="/parking">Parking Home</Link>      
  //   </h1>
  //   <h1>
  //     <Link to="/parking/Column2">Column2</Link>
  //   </h1>
  //   <h1>
  //     <Link to="/parking/Column3">Column3</Link>
  //   </h1>
  //   <h1>
  //     <Link to="/parking/navbar">NavBar</Link>
  //   </h1>
  //   <h1>
  //     <a href="/parking/home">ParkingHome</a>
  //   </h1>
  // </div>
// )

type ErrorPageProps = {
  // title: string,
  // paragraph?: string  // the paragraph is optional

}

class ErrorPage extends React.Component<ErrorPageProps> {
  constructor(props : ErrorPageProps) {
    super(props);

  
  }

  render() {
  return (

    <div>
      <h1>Error: could not find page. Allow me to redirect you</h1>
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
      <h1>
        <a href="/parking/home">ParkingHome</a>
      </h1>
  </div>
  );
  }
}


export default ErrorPage;