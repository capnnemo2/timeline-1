import React from "react";
import ReactDOM from "react-dom";
import BasicInfo from "./BasicInfo";

describe("<BasicInfo />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<BasicInfo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
