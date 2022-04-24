import * as React from "react";
import * as ReactDOM from "react-dom";
import useFramerMessage from "../lib";
import "./ui.css";

const App = () => {
  useFramerMessage();
  return (
    <iframe
      src="https://figmaplugin.framer.website/"
      loading="lazy"
      style={{ width: "100%", height: "100%", border: "none" }}
    ></iframe>
  );
};

ReactDOM.render(<App />, document.getElementById("react-page"));
