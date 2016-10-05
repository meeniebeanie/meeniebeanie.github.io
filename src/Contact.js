import React, { Component } from 'react';
import './style/App.css';

class Contact extends Component {
  constructor(){
    super();
    this.state = {
      showContact: false,
    }
  }

  _contactClick(){
    this.setState({
      showContact: !this.state.showContact
    });
  }

  render(){

    let contactLinks;
    let triangle;

    if (this.state.showContact) {
      triangle =
      <div className="triangle">
      </div>;

      contactLinks =
      
        <div className="Contact-info">
          <div>
            <h6>LET'S TALK!</h6>
          </div>
          <div className="wrapper">
            <i className="fa fa-github fa-fw"/>
            <a href="https://github.com/meeniebeanie/">github.com/meeniebeanie</a>
          </div>

          <hr className="contact-hr"/>

          <div className="wrapper">
            <i className="fa fa-envelope-o fa-fw"/>
            <a href="mailto:minyen.j@gmail.com?subject=Hey%20Jen!">minyen.j@gmail.com</a>
          </div>

          <hr className="contact-hr"/>

          <div className="wrapper">
            <i className="fa fa-linkedin fa-fw"/>
            <a href="https://www.linkedin.com/in/minyenjen">linkedin.com/minyenjen</a>
          </div>

          <hr className="contact-hr"/>

          <div className="wrapper">
            <i className="fa fa-paper-plane-o fa-w"/>
            <a href="https://telegram.me/meeniebeanie">telegram.me/meeniebeanie</a>
          </div>
        </div>;
    }

    return(
      <div>
        <div onClick={this._contactClick.bind(this)} className="Contact-bubble">
          <i className="fa fa-comment fa-2x"/>
        </div>
        {contactLinks}
        {triangle}
      </div>
    )
  }
}

export default Contact;
