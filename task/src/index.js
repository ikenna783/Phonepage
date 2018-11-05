import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class Page extends Component {
  // All React component classes that have a constructor should start it with a super() call.
  // The this.state method allows us to change the state in the future to a different value during an event such as onClick
  constructor() {
    super();
      this.state = {
        image: <img src={require('./img/iPhone8-Space-Grey.png')} alt="grey-iPhone" className="phone-img" />,
        color: ' Space Grey',
        capacity: ' 64GB',
        monthlyCost: '£43.20',
      }
  };
  render() {
    const data = {
      upfrontCost: '£1149',
      sixtyFourGigaBytes: {
        capacity: '64GB',
        monthlyCost: '£43.20',
      },
      twoHundredAndFiftySixGigaBytes: {
        capacity: '256GB',
        monthlyCost: '£46.80',
      }
    };
    return (
      <div className="container box">
        <div className="row">
          <div className="col-lg-6 phone-img-section">
          {/* Here we are placing the content of the image property in the state object into the space the curly brackets occupy. JavaScript that
           is used in within the JSX must always be contained in curly braces. */}
            {this.state.image}
          </div>
          <div className="col-lg-6 info-section">
            <h2>Apple iPhone 8</h2>
            <img src={require('./img/stars.png')} alt="stars" id="stars-img" />
            <p>All-glass design, advanced cameras, wireless charging and a smart A11 bionic chip.
            Intelligence never looked better.</p>
            <div className="row">
              <div className="col-lg-6 colour-section">
                <p>Colour:<span>{this.state.color}</span></p>
                <div className="row">
                {/* The setState methods below change the state properties of the images when clicked to what is specified in the method. */}
                  <div className="col-lg-4 colour-choice" id="gold-choice" onClick={() => this.setState({image: <img src={require('./img/iPhone8-Gold.png')} alt="gold-iPhone" className="phone-img" />, color: ' Gold'})}></div>
                  <div className="col-lg-4 colour-choice" id="silver-choice" onClick={() => this.setState({image: <img src={require('./img/iPhone8-Silver.png')} alt="silver-iPhone" className="phone-img" />, color: ' Silver'})}></div>
                  <div className="col-lg-4 colour-choice" id="grey-choice" onClick={() => this.setState({image: <img src={require('./img/iPhone8-Space-Grey.png')} alt="grey-iPhone" className="phone-img" />, color: ' Space Grey'})}></div>
                </div>
              </div>
                <div className="col-lg-6 capacity-section">
                  <p>Capacity:<span>{this.state.capacity}</span></p>
                  <div className="col-lg-6 capacity-choice" onClick={() => this.setState({capacity: ' 64GB', monthlyCost: ' £43.20'})}><p>64</p></div>
                  <div className="col-lg-6 capacity-choice" onClick={() => this.setState({capacity: ' 256GB', monthlyCost: ' £46.80'})}><p>256</p></div>
                </div>
              </div>
                <div className="price-section">
                  <div className="col-lg-6 section1">
                    <p>from <span>{data.upfrontCost}</span> upfront cost</p>
                  </div>
                  <div className="col-lg-6">
                    <p>When you pay <span>{this.state.monthlyCost}</span> a month</p>
                  </div>
                </div>
          </div>
        </div>
      </div>
    )
  }
};

render(<Page />, document.getElementById('root'));
