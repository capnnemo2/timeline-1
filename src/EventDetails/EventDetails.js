import React from "react";
// import dummyStore from "../dummyStore";
import "./EventDetails.css";

export default class EventDetails extends React.Component {
  render() {
    return (
      <div className="EventDetails">
        <h2>Event</h2>
        <p>This is a description.</p>
        <p>{this.props.event.title}</p>
      </div>
    );
  }
}

EventDetails.defaultProps = {
  event: {}
};
