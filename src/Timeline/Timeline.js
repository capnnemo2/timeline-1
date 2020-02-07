import React from "react";
import "./Timeline.css";

export default class Timeline extends React.Component {
  render() {
    return (
      <div className="Timeline">
        <div className="Timeline__space"></div>
        <hr />
        <section className="Timeline__section blue" id="section1">
          <h2>Section 1</h2>
          <p>In the beginning there was nothing</p>
          <ul>
            <li>1</li>
            <li>
              <a href="#section2">2</a>
            </li>
            <li>
              <a href="#section3">3</a>
            </li>
          </ul>
        </section>
        <section className="Timeline__section" id="section2">
          <h2>Section 2</h2>
          <p>...then there was Calvin!</p>
          <ul>
            <li>
              <a href="#section1">1</a>
            </li>
            <li>2</li>
            <li>
              <a href="#section3">3</a>
            </li>
          </ul>
        </section>
        <section className="Timeline__section blue" id="section3">
          <h2>Section 3</h2>
          <p>But Calvin was not a benevolent god...</p>
          <ul>
            <li>
              <a href="#section1">1</a>
            </li>
            <li>
              <a href="#section2">2</a>
            </li>
            <li>3</li>
          </ul>
        </section>
      </div>
    );
  }
}
