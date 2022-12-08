import React from "react";
import { Accordion } from "react-bootstrap";

function About() {
    return ( <
        div className = "container" >
        <
        h1 > About us < /h1> <
        Accordion defaultActiveKey = "0" >
        <
        Accordion.Item eventKey = "0" >
        <
        Accordion.Header > Analyze your text < /Accordion.Header>

        <
        Accordion.Body >
        Text Changer App gives you the way how to manipulate the text the way you want. <
        /Accordion.Body> <
        /Accordion.Item> <
        Accordion.Item eventKey = "1" >
        <
        Accordion.Header > Free to use < /Accordion.Header> <
        Accordion.Body >
        Text Changer App is free to use
        for anyone. <
        /Accordion.Body> <
        /Accordion.Item> <
        /Accordion> <
        /div>
    );
}

export default About;