/* @jsx createElement */
import { createElement, render, Component } from "./react.js";

class MyTitle extends Component {
  render() {
    return <h1>My Title 이에요!!</h1>;
  }
}

function Title(props) {
  return (
    <div>
      <h1>Title 입니다~~</h1>
      <p>잘 동작하나요?</p>

      <MyTitle />
    </div>
  );
}

render(<Title />, document.querySelector("#root"));
