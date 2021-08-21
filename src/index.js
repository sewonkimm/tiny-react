/* @jsx createElement */
import { createElement, render } from "./react.js";

function Title(props) {
  return (
    <div>
      <h1>Title 입니다~~</h1>
      <p>잘 동작하나요?</p>
    </div>
  );
}

render(<Title />, document.querySelector("#root"));
