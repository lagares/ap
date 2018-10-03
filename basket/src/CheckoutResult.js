import React, { Component } from 'react';

let success = true;
let message = "";

class CheckoutResult extends Component {
    render() {

        if (success) {
            message = "Thank you, your order is being processed."; 
        } else {
            message = "Sorry, there was a problem with your order, please call Customer Service at 800-515-1212.";
        }
        
        return (
            <div>
                <p>{message}</p>
            </div>
        )
    }
}

export default CheckoutResult;