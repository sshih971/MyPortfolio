import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {

	function showMessage(){

	}

	return (
		<div>
			<Link to="/about">
				<h1>My Name is Sha</h1>
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
			
			{/* <Navbar bg="light" expand="lg">
				<Nav.Link as={Link} to="/about">
					My Portfolio
				</Nav.Link>
			</Navbar> */}
		</div>
	);
};

export default Welcome;