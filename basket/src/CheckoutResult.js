import React, { Component } from 'react';

let success = true;
let message = "";

const CheckoutResult = {
    render() {

        if (success) {
            message = "Thank you, your order is being processed."; 
        }
        message = "Sorry, there was a problem with your order, please call Customer Service at 800-515-1212.";
        
        return (
            <div>
                <p>{message}</p>
            </div>
        )
    }
}

export default CheckoutResult;