import React from "react";
import { useState, useEffect } from "react";


const Home = () => {

	const [color, setColor] = useState ("red")
	const [automatic, setAutomatic] = useState (true)
	
	useEffect(() => {
		if(automatic){
		const interval = setInterval(() => {
		  if (color === "red") {
			setColor("yellow");
		  } else if (color === "yellow") {
			setColor("green");
		  } else if (color === "green") {
			setColor("red");
		  }
		}, 3000); 

		return () => clearInterval(interval);
		}
	}, [color, automatic]);
	
	const handleToggleAutomatic = () =>{
		setAutomatic(!automatic)
	};


	return (
			<div className="container">
				<div className="supporter"></div>		
				<div className="trafficLight">
					<div className={"red" + (color === "red" ? " glow" : "")}
						onClick={() => setColor("red")}>
					</div>
					<div className={"yellow" + (color === "yellow" ? " glow" : "")}
						onClick={() => setColor("yellow")}>
					</div>
					<div className={"green" + (color === "green" ? " glow" : "")}
						onClick={() => setColor("green")}>
					</div>

					<div className="button">
						<button onClick={handleToggleAutomatic}>
						{automatic ? "Stop" : "Start"}
						</button>
					</div>	
				</div>				
			</div>	
	);
};

export default Home;
