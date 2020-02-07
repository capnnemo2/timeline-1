import React from "react";
// import { Route } from "react-router-dom";
import Header from "./Header/Header";
import BasicInfo from "./BasicInfo/BasicInfo";
import Timeline from "./Timeline/Timeline";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <BasicInfo />
          <Timeline />
        </main>
      </div>
    );
  }
}
