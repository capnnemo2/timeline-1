import React from "react";
import Header from "./Header/Header";
import Timeline from "./Timeline/Timeline";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Timeline />
        </main>
      </div>
    );
  }
}
