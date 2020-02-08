import React from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import "./Timeline.css";

export default class Timeline extends React.Component {
  render() {
    return (
      <div className="Timeline">
        <BasicInfo updateEvent={this.props.updateEvent} />
      </div>
    );
  }
}
