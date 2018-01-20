import React from 'react';
import ReactDOM from 'react-dom';

// Export de Greeting
export class Greeting extends React.Component {
  render() {
  	// Condition qui utilise les props de Greeting
  	if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}