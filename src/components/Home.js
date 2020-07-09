import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';




export default class App extends Component {
  render() {
    return (
      <div className="body">
      <section className="u-clearfix u-palette-3-base u-section-1" id="carousel_1afe">
      <div className="u-clearfix u-sheet u-sheet-1">
        <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-white u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <h2 className="u-custom-font u-font-georgia u-text u-text-palette-1-base u-text-1" data-animation-name="slideIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction="Down">BANK MART</h2>
                  <p className="u-text u-text-2" data-animation-name="fadeIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction>Saving for a better future</p>
                </div>
              </div>
              <div className="u-align-right u-container-style u-layout-cell u-right-cell u-size-30 u-white u-layout-cell-2">
                <div className="u-container-layout">
                  <img src="images/money.jpeg" alt="" className="u-image u-image-default u-image-1" />
                  <div alt="" className="u-image u-image-circle u-image-2" />
                  <p className="u-text u-text-palette-1-base u-text-3">  
                 <br></br> <Link to={'/create'} >Create Account </Link> 
                   <br></br> <Link to={'/deposit'} >Deposit</Link>  
                    <br></br><Link to={'/withdraw'} >Withdraw</Link>
                   <br></br> <Link to={'/AccountDetails'} >Get Account Details</Link>  
                   <br></br>   <h5><Link to={'/Transactions'} >Get Account Transaction</Link> </h5> 
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
};