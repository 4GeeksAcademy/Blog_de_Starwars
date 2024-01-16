import React from "react";
import "../../styles/home.css";
import Character from "../component/characters";
import Planet from "../component/planets";

export const Home = () => (
	<div className="container">
    	<div className="text-left mt-5">
        	<h1 className="text-danger">Characters</h1>
    	</div>

		<div className={"scroll"} style={{display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
			<Character />
		</div>

		<div className="text-left mt-5">
        	<h1 className="text-danger">Planets</h1>
    	</div>

		<div className={"scroll"} style={{display: 'flex', flexDirection: 'row', overflowX: 'auto'}}>
			<Planet />
		</div>
	</div>

);
