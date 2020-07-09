import React, { Component } from 'react';
import Detail from './Detail';
import { Route } from 'react-router-dom';


class Deposit extends Component {
    state = { accountNumber : "" , depositAmount: "", accountInfo: null, messageData: null }

    depositFund = () => {
        const request = new Request('/account/deposit/' + this.state.accountNumber, {
            crossDomain:true,
            method: 'PUT',  
            redirect: 'follow',
            headers: new Headers({'Content-Type': 'application/json'}),
            credentials: 'same-origin',
            body: JSON.stringify({
                'amount': this.state.depositAmount
            })
          });
    
          fetch(request)
            .then(response => { return response.json(); })
            .then(res => {   
              if(res.type === 'success'){
                this.setState({ accountInfo: res.data })
              }else{
                this.setState({messageData: res})
              }
            })
            .catch(errors => { console.log(errors)})
    }

    render() { 

      var errorMessage = "";
   
      if (this.state.messageData !== null && this.state.messageData.type === 'danger') {
        errorMessage =  <div className="alert alert-danger" role="alert" style={{ marginTop: '15px'}}>{ this.state.messageData.message }</div>;
      }

        let detailHtml = "";
        if(this.state.accountInfo !== null){
          detailHtml = <Detail accountInfo={ this.state.accountInfo } />
        }

        return ( 
          <div className="body">
          <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
          {/*---- Include the above in your HEAD tag --------*/}
        
            <div className="row">
              <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h3 className="panel-title">Deposit</h3>
                  </div>
                  <div className="panel-body">
                   
                      <fieldset>
                      <div className="form-group">
                    <label htmlFor="exampleInputAddress">Please enter your account number</label>
                    <input type="text" className="form-control" placeholder="Account Number" style={ { width: '300px' } }
                    value={ this.state.accountNumber } 
                    onChange = {e => this.setState({accountNumber: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputAddress">Please enter deposit amount</label>
                    <input type="text" className="form-control" placeholder="Amount" style={ { width: '300px' } }
                    value={ this.state.depositAmount } 
                    onChange = {e => this.setState({depositAmount: e.target.value})}
                    />
                    </div>
               
                    <Route render={({ history}) => (
                <button
                  type='button'
                  className="btn btn-success"
                  style={{ marginRight: '15px' }}
                  onClick={() => { history.push('/') }}
                >
                  Cancel
                </button>
                  )} />
                <button type="submit" className="btn btn-danger" onClick={this.depositFund}>Submit</button>
                { errorMessage }
                { detailHtml }


                      </fieldset>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      );
    }
  };
 
export default Deposit;