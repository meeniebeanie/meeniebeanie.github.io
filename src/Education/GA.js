import React, { Component } from 'react';
import '../style/App.css';

class GA extends Component {
  render(){
    return(
      <div className="Education-info">
        <div className="Education-paddedbackground">
          <div>
            <h3>General Assembly</h3>
            <h6>Web Development Immersive | June 2016 - Sep 2016</h6>
            <p>Having freshly graduated from NUS, I delved into web development with the objective of having more ownership and autonomy over web pages. This technical journey has empowered me with another craft that I have grown to love- creating high impact, meaningful applications. Check out my <a href="#showcase">projects!</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default GA;
