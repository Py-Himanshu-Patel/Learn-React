import React from 'react';
import Card from "./Card";
import data from "./data";


const App = () => {
	return (
		<>
			<h1>List of Top 5 series</h1>
			{data.map( (value) => {
					return (
						<Card 
							key = {value.id}
							imgsrc = {value.imgsrc}
							seriesName = {value.seriesName}
							seriesTitle = {value.seriesTitle}
							link = {value.link}
						/>
					);				
			} )}
		</>
	);	
}

export default App;
