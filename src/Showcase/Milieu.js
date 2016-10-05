import React, { Component } from 'react';
import '../style/App.css';

class Milieu extends Component {
  render(){
    return(
      <div className="showcase-content">
        <h3><a href="http://bit.ly/milieu--/">MILIEU</a></h3>
        <div className="parentflex">
          <div>
            <div>
              <p>Milieu tracks consumer sentiments. A group project, built with Gerald, Weiyang and Someone. The server side aggregates data from surveys filled out by consumers, while the client side display these information to track consumer sentiment, alongside a twitter sentiment dashboard.</p>
            </div>
            <div className="description parentflex">
              <div>
                <h6>What I like about it:</h6>
                <ul>
                <li>A very comprehensive end-to-end App.</li>
                <li>Survey dashboard alongside twitter sentiments makes sense for analysts.</li>
                </ul>
              </div>
              <div>
                <h6>What I would change:</h6>
                <ul>
                <li>A simpler survey UX!</li>
                </ul>
              </div>
            </div>
            <div>
            <h6>Built Using</h6>
            <p>Node.JS / Express / MongoDB/ Bootstrap / D3</p>
            </div>
          </div>
          <div>
            <a href="http://bit.ly/milieu--/"><img  src="https://media.giphy.com/media/3oz8xAdGdGPbORPsVa/giphy.gif" width="480" height="262"></img></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Milieu;
