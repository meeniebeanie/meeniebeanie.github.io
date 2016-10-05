import React, { Component } from 'react';
import '../style/App.css';

class Compstak extends Component {
  render(){
    return(
      <div>
        <div>
          <h3>Compstak</h3>
          <h6>Marketing Intern | Aug 2014 - Jul 2015</h6>
          <p>I created marketing content for the team; making things from promotional videos for the landing page to creating infographics for the blog. I also manage Compstak's social media accounts- ensuring that audience is always engaged with relevant and interesting content.</p>

          <div>
            <div>
              <img className="quoted" src="http://i.imgur.com/YPwOwgL.jpg"/>
            </div>
            <div className="quote">
            <p> ‘I think the most impressive qualities about Jen, other than the fact that she is wickedly smart, are her energy and ability to learn quickly. She scours the outside environment for the knowledge and tools she can use on the job, and immediately applies them to make her work more efficient. She can work independently with very little instruction and produce high quality results. Jen is also very friendly and seems to enjoy the informal culture at CompStak. Of course, this is never in lieu of hard work. We're very thankful to have her on the team.’</p>
            <p>Danny Shachar<br/>
            Head of Marketing.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Compstak;
