import React from "react";
import dummyStore from "../dummyStore";
import "./BasicInfo.css";

export default class BasicInfo extends React.Component {
  handleClick(event) {
    console.log(event);
    this.props.updateEvent(event);
  }

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
                    <li>{event.keywords}</li>
                  </ul>
                  <div className="btn_container">
                    <button
                      type="button"
                      className="BasicInfo__btn details"
                      onClick={e => {
                        e.preventDefault();
                        this.handleClick(event);
                      }}
                    >
                      Details
                    </button>
                    <button type="button" className="BasicInfo__btn edit">
                      Edit event
                    </button>
                    <button type="button" className="BasicInfo__btn delete">
                      Delete event
                    </button>
                  </div>
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
