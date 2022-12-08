import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
    //prop or mode for enable modes
    const [mode, setMode] = useState("dark");

    const togglemode = () => {
        // removeBodyClasses();
        //document.body.classList.add("bg-" + btncls);
        if (mode === "dark") {
            setMode("light");
            document.body.style.backgroundColor = "#8AC7DB";
        } else {
            setMode("dark");
            document.body.style.backgroundColor = "grey";
        }
    };

    /*const removeBodyClasses = () => {
        document.body.classList.remove("bg-light");
        document.body.classList.remove("bg-warning");
        document.body.classList.remove("bg-primary");
        document.body.classList.remove("bg-dark");
      };*/
    return ( <
        >
        <
        Navigation mode = { mode }
        enablemode = { togglemode }
        />{" "} <
        />
    );
}

export default App;