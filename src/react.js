function renderRealDOM(vdom) {
  if (typeof vdom === "string") {
    return document.createTextNode(vdom);
  }

  if (vdom === undefined) return;

  const $el = document.createElement(vdom.tagName);

  vdom.children.map(renderRealDOM).forEach((node) => {
    $el.appendChild(node);
  });
  return $el;
}

export function render(vdom, container) {
  // virtualDOM에서 realDOM으로 그려주기
  container.appendChild(renderRealDOM(vdom));
}

export function createElement(tagName, props, ...children) {
  // children은 여러개가 생길 수 있으므로 가변인자

  if (typeof tagName === "function") {
    return tagName.apply(null, [props, ...children]);
  }

  return { tagName, props, children };
}
