import React from "react";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
	  const greeting = "Welcome!";

	return (
        <div>
            <h1>{greeting}</h1>
		    <Router>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
        </div>
	);
};

export default App;