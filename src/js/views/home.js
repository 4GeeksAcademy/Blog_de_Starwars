import React from "react";
import "../../styles/home.css";
import Character from "../component/characters";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		
		<Character />
		
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
