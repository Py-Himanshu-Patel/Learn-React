// first letter of name of a component is always capital
import React from 'react';

// name of function and file must be same
// this is not a function but a component
function List(){
	return (
	<ol>
		<li>First</li>
		<li>Second</li>
		<li>Third</li>
	</ol>
	);
}

//  export the component
export default List;