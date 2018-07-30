import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import { Template, Clause } from "@accordproject/cicero-core";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      text: `6.1.7 Liquidated Damages for Delayed Delivery. 
In the event the EXW delivery date of the Equipment is delayed beyond the delivery schedule as indicated in Annex A, solely through the fault of the Seller, and unless the parties mutually agreed to an extension thereto, the Buyer is entitled to claim liquidated damages in an amount equivalent to 200.00 USD. 
Prior to implementing the provisions of Article 16.4 pursuant to this section, Buyer agrees that it shall discuss with Seller alternate remedies in good faith.. . . . 

7.1 The Equipment to be shipped to the Buyer shall be packed and shipped in accordance with the Specifications and if not specified therein.... 
Additionally the Equipment should have proper devices on it to record any shock during transportation as any instance of acceleration outside the bounds of -0.5g and 0.5g. 
Each shock shall reduce the Contract Price by 5.00 USD. Packing containing fragile materials should be so marked in bold stout letters. . . . .

ANNEX A
Equipment Description, Contract Price and Delivery Schedule

Contract Price is 1000.00 USD per unit of Equipment.
Delivery Schedule: no later than 10 seconds after initiation.
`,
      message: 'Not yet parsed.'
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(event) {
    const state = this.state;
    try {
        this.state.clause.parse(event.target.value);
        state.message = 'Parse successful!';
    } catch (error){
         state.message = error.message;
    }
    this.setState(state);
  }

  componentDidMount() {
    Template.fromUrl('https://templates.accordproject.org/archives/fragile-goods@0.3.0.cta').then((template) => { 
        console.log('Loaded template: ' + template.getIdentifier());
        const state = this.state;
        state.clause = new Clause(template);
    });
  }

  render() {
    const { text, message } = this.state;
    return (
      <form id="article-form">
        <Input
          value={text}
          handleChange={this.handleChange}
        />
        <div style={{whiteSpace: 'pre', fontFamily: 'courier'}}>{message}</div>
      </form>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
