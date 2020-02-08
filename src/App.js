import React from "react";
import Header from "./Header/Header";
import Timeline from "./Timeline/Timeline";
import EventDetails from "./EventDetails/EventDetails";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {
        title: "",
        dates: "",
        location: "",
        decription: "",
        eventId: ""
      }
    };
  }

  updateEvent(event) {
    this.setState({ event });
  }

  render() {
    const event = this.state.event;
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Timeline updateEvent={this.updateEvent} />
          <EventDetails details={event} />
        </main>
      </div>
    );
  }
}
