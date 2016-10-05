import React, { Component } from 'react';
import './style/App.css';
import './style/skeleton.css';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      showMenu: false,
    }
  }

  _menuClick(){
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render(){
    let menuLinks;

    if (this.state.showMenu) {
      menuLinks =
      <div className="page">

        <div>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#showcase">Portfolio</a></li>
        <li><a href="#contact">Let's Talk</a></li>
        </div>

      </div>;
    }

    return(
      <div className="navpage" onClick={this._menuClick.bind(this)}>
        <div id="hamburger">
          <span className="burgerBars"></span>
          <span className="burgerBars"></span>
          <span className="burgerBars"></span>
        </div>
        {menuLinks}
      </div>
    )
  }
}

export default Navbar;
