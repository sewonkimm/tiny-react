/* @jsx createElement */
import { createElement, render, Component } from "./react.js";

class MyTitle extends Component {
  render() {
    return createElement("h1", null, "My Title \uC774\uC5D0\uC694!!");
  }

}

function Title(props) {
  return createElement("div", null, createElement("h1", null, "Title \uC785\uB2C8\uB2E4~~"), createElement("p", null, "\uC798 \uB3D9\uC791\uD558\uB098\uC694?"), createElement(MyTitle, null));
}

render(createElement(Title, null), document.querySelector("#root"));