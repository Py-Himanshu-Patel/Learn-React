import Images from "./Images";

function Card(props){
	return (
		<div className="cards">
			<div className="card">
				<Images imgsrc={props.imgsrc}/>
				<div className="card_info">
					<span className="card__category">{props.seriesTitle}</span>
					<h3 className="card__title">{props.seriesName}</h3>
					<a href={props.link} target="_blank">
						<button>Watch Now</button>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
