import React from "react";
// import dummyStore from "../dummyStore";
import "./EventDetails.css";

export default class EventDetails extends React.Component {
  render() {
    return (
      <div className="EventDetails">
        <h2>{this.props.details.title}</h2>
        <p>{this.props.details.dates}</p>
        <p>{this.props.details.location}</p>
        <p>{this.props.details.description}</p>
      </div>
    );
  }
}
