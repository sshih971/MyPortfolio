import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {

	function showMessage(){

	}

	return (
		<div>
			<Link to="/about">
				<h1>My name is Nurshahidah. I'm from Malaysia. </h1>
			</Link>
			<p>I'm a Front End Web Developer</p>
			<Link to="/projects">
				<p>Projects</p>
			</Link>
			<Link to="/skills">
				<p>Skills</p>
			</Link>
			<Link to="/contact">
				<p>Contact</p>
			</Link>

            <button onClick={() => {
                const message = document.querySelector("#message");
                message.style.display = "block";
            }}>Show A Message</button>

            <div style={{display: "none"}} id="message">
                <p>Hello!</p>
            </div>

		</div>
	);
};

export default Projects;