const NewPage = () => {
    return <h1>Test</h1>;
  };
  
  export default NewPage;
  const NewPage2 = () => {
    return <h1>Test 2</h1>;
  };
  
  export default NewPage2;
  import React from "react";
  import { Link } from "react-router-dom";
  import Navbar from "./Navbar";
  
  const Welcome = () => {
  
    return (
      <div>
        <Navbar />
        <Link to="/about">
          <h1>My Name is Abbi</h1>
        </Link>
        <p>I'm a Web Developer</p>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
        <Link to="/skills">
          <p>Skills</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
  
        <button
          onClick={() => {
            const message = document.querySelector("#message");
            message.style.display = "block";
          }}
        >
          Show A Message
        </button>
  
        <div style={{ display: "none" }} id="message">
          <p>Hello!</p>
        </div>
      </div>
    );
  };
  
  export default Welcome;
  import { Link } from "react-router-dom";
  
  const Navbar = () => {
      return (
          <header>
              <div className="container">
                  <Link to="/">
                      <h1>Test Page</h1>
                  </Link>
                  <nav>
                      <div>
                          <Link to="/1">Page 1</Link>
                          <Link to="/2">Page 2</Link>
                      </div>
                  </nav>
              </div>
          </header>
      );
  };
  
  export default Navbar;
  