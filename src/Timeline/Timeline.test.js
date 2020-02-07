import React from "react";
import ReactDOM from "react-dom";
import Timeline from "./Timeline";

describe("<Timeline />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Timeline />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
