import React from "react";
import ReactDOM from "react-dom";
import EventDetails from "./EventDetails";

describe("<EventDetails />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<EventDetails />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
