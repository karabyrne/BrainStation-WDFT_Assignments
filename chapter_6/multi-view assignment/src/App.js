import React from 'react';
import {Link} from 'react-router';


//css
import './App.css';

class App extends React.Component {

  render() {

    console.log(this.props.children);
    return (
      <div className="App">

        <h1> Header </h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

         <div style={{ 'border': 'solid thin black' }}>
          {this.props.children}
        </div> 


      </div>
    );
  }
}

export default App;
