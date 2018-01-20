import React from 'react';
import ReactDOM from 'react-dom';
// Importe Greeting
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hello and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

// Les props name et signedIn sont passées dans le component Greeting