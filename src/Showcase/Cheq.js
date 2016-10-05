import React, { Component } from 'react';
import '../style/App.css';

class Cheq extends Component {
  render(){
    return(
      <div className="showcase-content">
        <h3><a href="http://bit.ly/cheq--/">CHEQ</a></h3>
        <div className="parentflex">
          <div>
            <div>
              <p>Keep check and split your expenses with friends! A group project, built with Barney and Zhezhang.</p>
            </div>
            <div className="description parentflex">
              <div>
                <h6>What I like about it:</h6>
                <ul>
                <li>It's super functional!</li>
                <li>Facebook OAuth login to easily select friends!</li>
                </ul>
              </div>
              <div>
                <h6>What I would change:</h6>
                <ul>
                <li>Make it more visual by grabbing profile pictures.</li>
                <li>Optimize for mobile.</li>
                </ul>
              </div>
            </div>
            <div>
            <h6>Built Using</h6>
            <p>Node.JS / Express / React.js / MongoDB / Bulma</p>
            </div>
          </div>
          <div>
            <a href="http://bit.ly/cheq--/"><img  src="https://media.giphy.com/media/adwyFv25LoTHG/giphy.gif" width="480" height="342"></img></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Cheq;
