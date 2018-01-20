// Code entre accolades : si code entre tags JSX, ce code n'est pas traité comme du JSX mais comme du javascript

<h1>2 +3</h1> {/* affichera "2 + 3" */} 

<h1>{2 + 3}</h1> {/* affichera 5 */} 


// On peut accéder aux variables déclarées en js dans le JSX 
const name = 'Julie';

const greeting = <p>Hello, {name} !</p>;

const chaine = 'chaine de caractères';
ReactDOM.render(<h1>{chaine}</h1>, document.getElementById('app'));

// ********************************************************************************************************* //
// LISTENER

function makeDoggy(e) {
	// Remplacera l'image par une autre
	e.target.setAttribute('src', 'https://....');
	e.target.setAttribute('alt', '...');
}

// Image kitty, qui sera rendue en 1er
const kitty = (
	<img
		src="https://..."
		alt="..."
		// ajout d'un onClick avec appel de la fonction définie au dessus
		onClick={makeDoggy} />
	);

ReactDOM.render(kitty, document.getElementById('aSome'));

// ********************************************************************************************************* //
// CONDITIONS

// Pas possible d'injecter un if dans du JSX

// Laisser le if à l'extérieur des tags JSX

let message;

if (user.age >= drinkingAge) {
	message = "Ok";
} else {
	message = "Pas OK";
}

ReactDOM.render(message, document.getElementById('aSome'));

// Renvoie une image différente aléatoirement
function coinToss() {
	// si random renvoie un chiffre < 0,5 la fonction retourne heads, sinon tails
	return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
	kitty: 'https...',
	doggy: 'https...'
};
let img;

if (coinToss() === 'heads') {
	img = <img src={pics.kitty} />;
} else {
	img = <img src={pics.doggy} />;
};

// Autre syntaxe 

//const pics idem
cont img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(img, document.getElementById('aSome'));


// ********************************************************************************************************* //
// .map()

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
	<li>{person}</li>  
);

ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'));

// Affiche une liste avec les 3 personnes

// ********************************************************************************************************* //
// KEYS

// key : attribut JSX, unique, comme l'id
// Une liste nécessite une key si :  - les items doivent avoir de la mémoire d'un rendu à l'autre (to do list, coché ou non)
								//   - l'ordre de la liste peut être mélangé d'un rendu à l'autre

const people = ['Rowe', 'Prevost', 'Gare'];

// On ajoute un paramètre à .map() : i
const peopleLis = people.map((person, i) =>
	// On ajoute une clé unique au li
	<li key={i} >{person}</li>  
);

ReactDOM.render(<ul>{peopleLis}</ul>,document.getElementById('app'));

// ********************************************************************************************************* //
// React sans JSX

const greatestDivEver = <div> i am div</div>;

// Est égal à :

const greatestDivEver = React.createElement(
	"div",
	null,
	"i am div"  
);


// ********************************************************************************************************* //
// COMPONENT CLASS (usine à component)

import React from 'react';
import ReactDOM from 'react-dom';

class FirstClass extends React.Component {
	render() {
		return <h1>Hello world</h1>;
	}
}

// Les noms des classes commencent tjs par une majuscule (UpperCamelCase) pour les dissocier des tags html

// Component class avec une méthode : render
// Instanciation du component (qui hérite des méthodes du component class):
<FirstClass />; // return donc un JSX h1 Hello world

// Application :
ReactDOM.render(<FirstClass />, document.getElementById('...')); 


// ********************************************************************************************************* //
// If

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class TonightsPlan extends React.Component {
  render() {
    let res;
    if (fiftyFifty) {
      res = <h1>Tonight I'm going out WOOO</h1>
    } else {
      res = <h1>Tonight I'm going to bed WOOO</h1>
    }
    return (res);
  }
};

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));

// ********************************************************************************************************* //
// Event handler

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {

  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream} >AAAAAH!</button>;
  }
};

ReactDOM.render(<Button />, document.getElementById('app'));


// ********************************************************************************************************* //
// PROPS

// Les props d'un component sont des objets
// Un component peut passer des informations à un autre component : ce sont les props
// Component props est un objet. Contient des informations sur ce component
// Pour voir les props d'un component :  this.props











