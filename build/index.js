/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title(props) {
  return createElement("div", null, createElement("h1", null, "Title \uC785\uB2C8\uB2E4~~"), createElement("p", null, "\uC798 \uB3D9\uC791\uD558\uB098\uC694?"));
}

render(createElement(Title, null), document.querySelector("#root"));