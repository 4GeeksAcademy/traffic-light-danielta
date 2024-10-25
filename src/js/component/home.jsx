import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("red")  
	// if (color == "red")
		return (
			<div id="light">
				<button type="button" id="redLight" style={{backgroundColor: "red", boxShadow: color == "red" && "0 0 10px 15px white"}} onClick= {() => setColor("red")}></button>
				<button type="button" id="yellowLight" style={{backgroundColor: "yellow", boxShadow: color == "yellow" && "0 0 10px 15px white"}} onClick= {() => setColor("yellow")}></button>
				<button type="button" id="greenLight" style={{backgroundColor: "green", boxShadow: color == "green" && "0 0 10px 15px white"}} onClick= {() => setColor("green")}></button>
			</div>
	);
	// if (color == "yellow")
	// 	return (
	// 		<div id="light">
	// 			<button type="button" id="redLight" style={{backgroundColor: "red"}} onClick= {() => setColor("red")}></button>
	// 			<button type="button" id="yellowLight" style={{backgroundColor: "yellow", boxShadow: "0 0 10px 15px white"}} onClick= {() => setColor("yellow")}></button>
	// 			<button type="button" id="greenLight" style={{backgroundColor: "green"}} onClick= {() => setColor("green")}></button>
	// 		</div>
	// );
	// if (color == "green")
	// 	return (
	// 		<div id="light">
	// 			<button type="button" id="redLight" style={{backgroundColor: "red"}} onClick= {() => setColor("red")}></button>
	// 			<button type="button" id="yellowLight" style={{backgroundColor: "yellow"}} onClick= {() => setColor("yellow")}></button>
	// 			<button type="button" id="greenLight" style={{backgroundColor: "green", boxShadow: "0 0 10px 15px white"}} onClick= {() => setColor("green")}></button>
	// 		</div>
	// );
};

export default TrafficLight;
