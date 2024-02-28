import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

// начало декларативного подхода
function App() {
  return createElement(
    "div",
    { className: "App" },
    createElement(
      "header",
      { className: "App-header" },
      createElement("img", {
        className: "App-logo",
        src: logo,
        alt: "logo",
      }),
      createElement(
        "p",
        {},
        "Edit ",
        createElement("code", {}, "src/App.js"),
        " and save to reload."
      ),
      createElement(
        "a",
        {
          className: "App-link",
          href: "https://reactjs.org",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        "Learn React"
      ),
      createElement("p", {}, `${new Date().getFullYear()}`)
    )
  );
}
// конец декларативного подхода

export default App;
