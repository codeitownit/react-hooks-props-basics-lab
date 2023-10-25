import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  console.log(props.bio)
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {props.bio&&props.bio!==''?<p>{props.bio}</p>:null}
      <Links githubLink={user.links.github} linkedIn={user.links.linkedin} />
    </div>
  );
}

export default About;
