// first letter of name of a component is always capital

// name of function and file must be same
// this is not a function but a component
function Add(first, second){
	return first+second;
}

function Multipy(first, second){
	return first*second;
}

function Subtract(first, second){
	return first-second;
}

function Divide(first, second){
	return (first/second).toFixed(3);
}


// export the component
export {Add, Multipy, Subtract, Divide};
