import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function Home(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpperclick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowerclick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    };

    const handleCopyClick = () => {
        var copyText = document.getElementById("mytxt");
        copyText.select();
        navigator.clipboard.writeText(text);
    };

    const handleItalicText = () => {
        let italicText = document.getElementById("mytxt");
        italicText.style.fontStyle = "italic";
    };

    const handleTitleClick = () => {
        let newText = text
            .split(" ")
            .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
            .join(" ");
        setText(newText);
    };

    const handleColorChange = () => {
        let colorText = document.getElementById("mytxt");
        colorText.style.color = "red";
    };

    const handleNormalText = () => {
        let colorText = document.getElementById("mytxt");
        colorText.style.color = "black";
    };

    return ( <
        >
        <
        Form className = "container mt-4" >
        <
        Form.Group className = "mb-3"
        controlId = "mytxt" >
        <
        Form.Label >
        <
        h3 className = { `text-${props.mode === "dark" ? "light" : "dark"}` } >
        Enter some text to analyze <
        /h3> <
        /Form.Label> <
        Form.Control as = "textarea"
        rows = { 6 }
        placeholder = "Enter something here..."
        value = { text }
        onChange = { handleOnChange }
        /> <
        /Form.Group> <
        /Form> <
        div className = "container" >
        <
        Button variant = "primary mx-1 "
        onClick = { handleUpperclick } >
        convert uppercase <
        /Button> <
        Button variant = "primary mx-1"
        onClick = { handleLowerclick } >
        convert lowercase <
        /Button> <
        Button variant = "primary mx-1" > convert titlecase < /Button> <
        Button variant = "primary mx-1"
        onClick = { handleClearClick } >
        clear the text <
        /Button> <
        Button variant = "primary mx-1"
        onClick = { handleCopyClick } >
        copy the text <
        /Button> <
        Button variant = "primary mx-1"
        onClick = { handleItalicText } >
        convert to italics <
        /Button> <
        Button variant = "primary"
        onClick = { handleTitleClick } >
        convert to titlecase <
        /Button> <
        Button variant = "primary mt-2 mx-1"
        onClick = { handleColorChange } >
        convert to color <
        /Button> <
        Button variant = "primary mt-2"
        onClick = { handleNormalText } >
        normalize text <
        /Button> <
        /div> <
        div className = "container my-3" >
        <
        h2 > Preview < /h2> <
        p > { text.split(" ").length - 1 }
        words and { text.length }
        characters <
        /p> <
        /div> <
        />
    );
}

export default Home;