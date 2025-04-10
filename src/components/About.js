import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.bio && props.bio !== "" && <p>{props.bio}</p>}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
