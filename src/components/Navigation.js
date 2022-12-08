import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import Home from "./Home";
import About from "./About";
import Form from "react-bootstrap/Form";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navigation(props) {
    return ( <
        div >
        <
        BrowserRouter >
        <
        Navbar bg = { props.mode }
        variant = { props.mode } >
        <
        Container >
        <
        Navbar.Brand href = "#home" > Text Changer < /Navbar.Brand>{" "} <
        Nav className = "me-auto" >
        <
        Nav.Link as = { Link }
        to = "/" >
        Home <
        /Nav.Link> <
        Nav.Link as = { Link }
        to = "/about" >
        About <
        /Nav.Link>{" "} <
        Nav.Link href = "#pricing" > CardsBlog < /Nav.Link>{" "} <
        /Nav> {
            /*<div className="d-flex">
                          <div
                            className="bg-primary rounded mx-2"
                            style={{ height: "20px", width: "20px", cursor: "pointer" }}
                            onClick={() => {
                              props.enablemode("primary");
                            }}
                          ></div>
                          <div
                            className="bg-warning rounded mx-2"
                            style={{ height: "20px", width: "20px", cursor: "pointer" }}
                            onClick={() => {
                              props.enablemode("warning");
                            }}
                          ></div>*/
        } <
        Form >
        <
        Form.Check type = "switch"
        id = "custom-switch"
        label = "Toggle mode"
        className = { `text-${props.mode === "light" ? "dark" : "light"}` }
        onClick = { props.enablemode }
        />{" "} <
        /Form>{" "} <
        /Container>{" "} <
        /Navbar>{" "} <
        Routes >
        <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route exact path = "/"
        element = { < Home / > }
        /> <
        /Routes> <
        /BrowserRouter> <
        /div>
    );
}

export default Navigation;