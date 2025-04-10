import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user"; // Changed to default import (no curly braces)
function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} /> {/* Accessing properties of the default import */}
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} /> {/* Accessing properties of the default import */}
    </div>
  );
}

export default App;