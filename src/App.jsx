import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';

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
		</>
	);
}

export default App;