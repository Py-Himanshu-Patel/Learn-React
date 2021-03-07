import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';
import {Add, Multipy, Subtract, Divide} from './Calculator';

// this is basically a master component so that we
// don't have to import all the components in index.js
// file
function App() {
	// return the react fragement including all the 
	// required components
	return (
		<>
			<Heading />
			<Paragraph />
			<List />	
			<Paragraph />

			<p>Calculations</p>
			<p>Sum of two number is {Add(5,9)}</p>
			<p>Subtraction of two number is {Subtract(5,7)}</p>
			<p>Division of two number is {Divide(2,3)}</p>
			<p>Multiplication of two number is {Multipy(5,5)}</p>
		</>
	);
}

export default App;