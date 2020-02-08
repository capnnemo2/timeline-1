import React from "react";
import dummyStore from "../dummyStore";
import "./BasicInfo.css";

export default class BasicInfo extends React.Component {
  render() {
    return (
      <div className="BasicInfo">
        <ul>
          {dummyStore.events.map(event => (
            <li key={event.eventId} className="BasicInfo__event">
              <div className="container left">
                <div className="content">
                  <h2>{event.title}</h2>
                  <ul>
                    <li>{event.dates}</li>
                    <li>{event.location}</li>
                    {/* event.description doesn't render. why? */}
                    <li>{event.description}</li>
                  </ul>
                  {/* the button needs to find the eventId, send that up to app, which will change state to match the event with the correct eventId */}
                  <button
                    type="button"
                    onClick={e => this.props.updateEvent(e.target.value)}
                  >
                    Details
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* Someway to see other events in the same (location?) */}
        {/* A way to see connected events. Maybe location tags will be a certain color? */}
      </div>
    );
  }
}
