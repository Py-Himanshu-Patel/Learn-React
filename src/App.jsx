import React from 'react';
import Card from "./Card";

function App() {
	return (
		<>
			<Card 
				imgsrc = "https://picsum.photos/200/300"
				seriesName = "DARK"
				seriesTitle = "Netflix Original"
				link = "https://picsum.photos/"
			/>
			<Card 
				imgsrc = "https://picsum.photos/200/300/?blur"
				seriesName = "ESCAPE"
				seriesTitle = "CN Original"
				link = "https://picsum.photos/"
			/>
			<Card 
				imgsrc = "https://picsum.photos/seed/picsum/200/300"
				seriesName = "GRAVITY"
				seriesTitle = "POGO Original"
				link = "https://picsum.photos/"
			/>
		</>
	);	
}

export default App;
