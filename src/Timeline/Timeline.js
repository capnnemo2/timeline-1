import React from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import "./Timeline.css";
// import dummyStore from "../dummyStore";

export default class Timeline extends React.Component {
  render() {
    return (
      <div className="Timeline">
        <BasicInfo />
      </div>
    );
  }
}
